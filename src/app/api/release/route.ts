export const dynamic = "force-dynamic";
export function GET() {
  return Response.json({ ready: true, release: "premium-20261019", solutions: 8 }, { headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" } });
}
