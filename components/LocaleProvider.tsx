import { NextIntlClientProvider } from "next-intl";
import type { Locale } from "@/lib/i18n";
import itMessages from "@/messages/it.json";
import enMessages from "@/messages/en.json";

const MESSAGES = { it: itMessages, en: enMessages } as const;

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={MESSAGES[locale]}>
      {children}
    </NextIntlClientProvider>
  );
}
