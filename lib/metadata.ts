import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

/**
 * Canonical + hreflang per una pagina disponibile su entrambe le lingue.
 * path è senza prefisso locale e senza slash iniziale (es. "aziende", "" per la home).
 */
export function buildAlternates(locale: Locale, path: string) {
  const suffix = path ? `/${path}` : "";
  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages: {
      it: `${SITE_URL}/it${suffix}`,
      en: `${SITE_URL}/en${suffix}`,
      "x-default": `${SITE_URL}/it${suffix}`,
    },
  };
}

export function buildPageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description?: string
): Metadata {
  const alternates = buildAlternates(locale, path);
  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: alternates.canonical,
    },
  };
}
