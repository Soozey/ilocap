const maximumBytes = 16_000;

export function formError(error: string, status: number) {
  return Response.json({ success: false, error }, { status });
}

export async function readPublicForm(request: Request): Promise<Record<string, unknown> | Response> {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json") return formError("Demande JSON attendue.", 415);

  const tooLarge = () => formError("Votre demande est trop longue.", 413);
  if (Number(request.headers.get("content-length")) > maximumBytes) return tooLarge();

  const reader = request.body?.getReader();
  if (!reader) return formError("Requête invalide.", 400);

  const decoder = new TextDecoder("utf-8", { fatal: true });
  let text = "";
  let size = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maximumBytes) {
        await reader.cancel().catch(() => {});
        return tooLarge();
      }
      text += decoder.decode(value, { stream: true });
    }
    const value: unknown = JSON.parse(text + decoder.decode());
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value as Record<string, unknown>;
    }
  } catch {
    await reader.cancel().catch(() => {});
  } finally {
    reader.releaseLock();
  }
  return formError("Requête invalide.", 400);
}

export function isText(value: unknown, maximum: number): value is string {
  return typeof value === "string" && value.length <= maximum && value.trim().length > 0;
}

export function isOptionalText(value: unknown, maximum: number) {
  return value == null || value === "" || isText(value, maximum);
}

export function isEmail(value: unknown): value is string {
  return isText(value, 254) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function escapeHtml(value: string | number | null | undefined = "") {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function emailSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ");
}

export function createFormRateLimit(maximum: number, windowMs: number) {
  let expiresAt = 0;
  let accepted = 0;

  return () => {
    const now = Date.now();
    if (now >= expiresAt) {
      expiresAt = now + windowMs;
      accepted = 0;
    }
    if (accepted >= maximum) {
      return Response.json({ success: false, error: "Trop de demandes. Veuillez réessayer dans un instant." }, {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((expiresAt - now) / 1_000)) },
      });
    }
    accepted += 1;
  };
}
