import { gateway } from "@/lib/ilocap-gateway.mjs";
export const dynamic = "force-dynamic";
export function GET(request: Request) { return gateway(request); }
export const POST = GET;
export const PATCH = GET;
export const DELETE = GET;
