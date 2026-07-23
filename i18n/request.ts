import { getRequestConfig } from "next-intl/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";

export default getRequestConfig(async ({ requestLocale, locale }) => {
  const requested = locale ?? (await requestLocale);
  const resolvedLocale = requested && isLocale(requested) ? requested : DEFAULT_LOCALE;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
