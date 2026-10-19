/** Fixed, anonymous public-form gateway. Private CRM operations never pass through this server. */
export const CRM_ORIGIN = "https://ilocap-digital-sens.lunarfrog7.chatgpt.site";
const publicOrigin = "https://ilocap.com";
const maximumBytes = 16000;
const json = (body, status) => Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "X-Content-Type-Options": "nosniff" } });
/** @param {Request} request @param {typeof fetch} [send] */
export async function gateway(request, send = fetch) {
  const path = new URL(request.url).pathname;
  if (path.startsWith("/api/admin")) return json({ error: "Accès réservé au suivi commercial privé." }, 403);
  const expectedMethod = path === "/api/context" ? "GET" : ["/api/leads", "/api/events"].includes(path) ? "POST" : null;
  if (!expectedMethod) return json({ error: "Ressource introuvable." }, 404);
  if (request.method !== expectedMethod) return json({ error: "Méthode non autorisée." }, 405);
  const mutation = request.method === "POST";
  if (mutation) {
    const origin = request.headers.get("origin");
    const localDevelopment = process.env.NODE_ENV !== "production" && origin === new URL(request.url).origin;
    if (request.headers.get("sec-fetch-site") === "cross-site" || (origin && origin !== publicOrigin && origin !== "https://www.ilocap.com" && !localDevelopment)) return json({ error: "Origine non autorisée." }, 403);
    if (!request.headers.get("content-type")?.includes("application/json")) return json({ error: "Demande JSON attendue." }, 415);
    if (Number(request.headers.get("content-length")) > maximumBytes) return json({ error: "Votre demande est trop longue." }, 413);
  }
  try {
    let body;
    if (mutation) {
      const reader = request.body?.getReader();
      const chunks = []; let size = 0;
      if (reader) for (;;) {
        const { done, value } = await reader.read(); if (done) break;
        size += value.byteLength;
        if (size > maximumBytes) { await reader.cancel(); return json({ error: "Votre demande est trop longue." }, 413); }
        chunks.push(value);
      }
      body = new Uint8Array(size); let offset = 0;
      for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
    }
    const headers = new Headers({ Accept: "application/json" });
    if (mutation) { headers.set("Content-Type", "application/json"); headers.set("Origin", publicOrigin); }
    // No visitor cookies, bearer tokens or identity headers are forwarded.
    const response = await send(new URL(path, CRM_ORIGIN), { method: request.method, headers, body, redirect: "error", cache: "no-store", signal: AbortSignal.timeout(15000) });
    const output = new Headers({ "Content-Type": response.headers.get("Content-Type") || "application/json", "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "X-Content-Type-Options": "nosniff" });
    return new Response(response.body, { status: response.status, headers: output });
  } catch {
    return json({ error: "L’enregistrement est momentanément indisponible. Votre saisie est conservée : réessayez ou contactez-nous sur WhatsApp." }, 503);
  }
}
