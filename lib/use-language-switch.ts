"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { LOCALES, type Locale } from "@/lib/i18n";

const OTHER_LOCALE: Record<Locale, Locale> = { it: "en", en: "it" };
const LOCALE_COOKIE = "NEXT_LOCALE";

/**
 * Logica pura per lo switcher lingua, senza UI: l'icona/bandierina si aggancia
 * dove serve (Navbar, menu mobile...). Preserva query string (utm_*, fbclid)
 * per non rompere l'attribuzione lead da ads quando si cambia lingua.
 *
 * Uso:
 *   const { targetLocale, targetHref, setCookie } = useLanguageSwitch();
 *   <a href={targetHref} onClick={setCookie}>{targetLocale.toUpperCase()}</a>
 */
export function useLanguageSwitch() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const targetLocale = OTHER_LOCALE[locale] ?? LOCALES[0];
  const query = searchParams.toString();
  const targetHref = pathname.replace(`/${locale}`, `/${targetLocale}`) + (query ? `?${query}` : "");

  const setCookie = () => {
    document.cookie = `${LOCALE_COOKIE}=${targetLocale}; path=/; max-age=31536000`;
  };

  return { locale, targetLocale, targetHref, setCookie, locales: LOCALES };
}
