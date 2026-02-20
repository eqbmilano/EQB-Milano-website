import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EQB Milano - Wellness & Fitness Coworking",
  description: "Wellness & Fitness Coworking a Milano. Spazio, Relazioni, Crescita.",
  openGraph: {
    title: "EQB Milano",
    description: "Uno spazio di coworking dedicato al benessere e al movimento.",
    url: "https://eqbmilano.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
