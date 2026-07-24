import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope, Poppins } from "next/font/google";
import { ORG, SERVICE_CATALOG, SITE_NAME, SITE_URL } from "@/lib/site";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EQB Milano - Wellness & Fitness Coworking",
  description: "Wellness & Fitness Coworking a Milano. Spazio, Relazioni, Crescita.",
  openGraph: {
    title: "EQB Milano",
    description: "Uno spazio di coworking dedicato al benessere e al movimento.",
    url: "https://eqbmilano.it",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

const IN_LANGUAGE: Record<string, string> = { it: "it-IT", en: "en-US" };

/**
 * Organization + WebSite JSON-LD, una volta sola nel root layout (vale per tutte le pagine).
 * Catalogo servizi B2C/B2B alla pari — nessuno dei due ordinato prima per priorità.
 * Il testo del catalogo resta in italiano anche in /en per ora (semplificazione nota):
 * solo inLanguage e url del nodo WebSite sono già corretti per lingua.
 */
function OrganizationJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: ORG.name,
        legalName: ORG.legalName,
        description: ORG.description,
        url: ORG.url,
        telephone: ORG.telephone,
        email: ORG.email,
        vatID: ORG.vatID,
        image: `${SITE_URL}${ORG.logoPath}`,
        logo: `${SITE_URL}${ORG.logoPath}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.address.streetAddress,
          addressLocality: ORG.address.addressLocality,
          postalCode: ORG.address.postalCode,
          addressRegion: ORG.address.addressRegion,
          addressCountry: ORG.address.addressCountry,
        },
        sameAs: ORG.sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servizi EQB Milano",
          itemListElement: SERVICE_CATALOG.map((service) => ({
            "@type": "Offer",
            audience: {
              "@type": "Audience",
              audienceType: service.audience === "B2C" ? "Clienti finali" : "Professionisti e aziende",
            },
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: IN_LANGUAGE[locale] ?? IN_LANGUAGE[DEFAULT_LOCALE],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeHeader = (await headers()).get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <meta name="color-scheme" content="light" />
        <OrganizationJsonLd locale={locale} />
      </head>
      <body className={`${manrope.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
