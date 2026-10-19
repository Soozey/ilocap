import { CRM_ORIGIN } from "@/lib/ilocap-gateway.mjs";
export const dynamic = "force-dynamic";
export function GET(request: Request) {
  const destination = new URL("/suivi", CRM_ORIGIN);
  destination.search = new URL(request.url).search;
  return new Response(null, { status: 302, headers: { Location: destination.href, "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}
