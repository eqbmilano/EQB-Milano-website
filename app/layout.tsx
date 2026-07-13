import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
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
  metadataBase: new URL("https://www.eqbmilano.it"),
  title: {
    default: "EQB Milano — Wellness & Fitness Coworking",
    template: "%s — EQB Milano",
  },
  description:
    "Wellness & Fitness Coworking a Milano, zona Cinque Giornate. Osteopatia, fisioterapia, Pilates, massaggi e nutrizione in un unico ecosistema di professionisti selezionati.",
  openGraph: {
    siteName: "EQB Milano",
    title: "EQB Milano — Wellness & Fitness Coworking",
    description:
      "Uno spazio di coworking dedicato al benessere e al movimento, in Viale Regina Margherita 43 a Milano.",
    url: "/",
    type: "website",
    locale: "it_IT",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EQB Milano — lo studio" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "EQB Milano",
  description:
    "Wellness & Fitness Coworking a Milano: osteopatia, fisioterapia, Pilates, massaggi e nutrizione in un unico spazio.",
  url: "https://www.eqbmilano.it",
  telephone: "+393755153273",
  email: "info@eqbmilano.it",
  image: "https://www.eqbmilano.it/og.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Viale Regina Margherita 43",
    postalCode: "20122",
    addressLocality: "Milano",
    addressRegion: "MI",
    addressCountry: "IT",
  },
  sameAs: [
    "https://www.instagram.com/eqbmilano/",
    "https://www.linkedin.com/company/eqbmilano",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
