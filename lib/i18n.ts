export const LOCALES = ["it", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "it";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
