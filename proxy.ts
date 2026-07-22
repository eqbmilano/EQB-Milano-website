import { NextRequest, NextResponse } from "next/server";
import { professionisti } from "@/app/[slug]/data";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";

// Host di produzione: finché SITE_GATED non passa a "false" (env, ok esplicito di Marco
// al lancio) il sito completo resta bloccato qui — restano raggiungibili solo le pagine
// linktree (/[slug]) e il redirect tracker (/r/*). Su ogni altro host (es. preview VPS
// sito.eqbmilano.it) tutto è raggiungibile, ma sempre noindex finché SITE_GATED è attivo.
const GATED_HOSTS = new Set(["eqbmilano.it", "www.eqbmilano.it"]);
const SLUGS = new Set(professionisti.map((p) => p.slug));
const SITE_GATED = process.env.SITE_GATED !== "false";

const LOCALE_COOKIE = "NEXT_LOCALE";

function isLinktreeOrTracker(pathname: string): boolean {
  if (pathname.startsWith("/r/")) return true;
  return SLUGS.has(pathname.slice(1));
}

// Il linktree (/[slug]) resta solo IT per scelta esplicita del 21/07: non ha bisogno
// di rilevamento lingua, quindi va escluso anche qui prima di controllare "/".
function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  for (const part of acceptLanguage.split(",")) {
    const tag = part.trim().split(";")[0].split("-")[0].toLowerCase();
    if (isLocale(tag)) return tag;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;

  if (SITE_GATED && GATED_HOSTS.has(host) && !isLinktreeOrTracker(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  if (pathname === "/") {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    const redirectRes = NextResponse.redirect(url);
    if (SITE_GATED) {
      redirectRes.headers.set("X-Robots-Tag", "noindex, nofollow");
    }
    return redirectRes;
  }

  const [, maybeLocale] = pathname.split("/");
  const res = isLocale(maybeLocale)
    ? (() => {
        // Header interno, letto da app/layout.tsx per <html lang> senza duplicare
        // il parsing del pathname lato Server Component.
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-locale", maybeLocale);
        return NextResponse.next({ request: { headers: requestHeaders } });
      })()
    : NextResponse.next();

  if (isLocale(maybeLocale)) {
    res.cookies.set(LOCALE_COOKIE, maybeLocale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  }

  if (SITE_GATED) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
