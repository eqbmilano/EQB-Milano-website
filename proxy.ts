import { NextRequest, NextResponse } from "next/server";
import { professionisti } from "@/app/[slug]/data";

// Host di produzione: finché SITE_GATED non passa a "false" (env, ok esplicito di Marco
// al lancio) il sito completo resta bloccato qui — restano raggiungibili solo le pagine
// linktree (/[slug]) e il redirect tracker (/r/*). Su ogni altro host (es. preview VPS
// sito.eqbmilano.it) tutto è raggiungibile, ma sempre noindex finché SITE_GATED è attivo.
const GATED_HOSTS = new Set(["eqbmilano.it", "www.eqbmilano.it"]);
const SLUGS = new Set(professionisti.map((p) => p.slug));
const SITE_GATED = process.env.SITE_GATED !== "false";

function isLinktreeOrTracker(pathname: string): boolean {
  if (pathname.startsWith("/r/")) return true;
  return SLUGS.has(pathname.slice(1));
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;

  if (SITE_GATED && GATED_HOSTS.has(host) && !isLinktreeOrTracker(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  const res = NextResponse.next();
  if (SITE_GATED) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
