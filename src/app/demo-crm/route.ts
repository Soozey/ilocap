import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const dynamic = "force-dynamic";
export async function GET() {
  const html = await readFile(join(process.cwd(), "site/demo-crm.html"), "utf8");
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}
