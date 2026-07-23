import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { ContattiPage } from "@/components/ContattiPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "contatti",
  "Contact — EQB Milano",
  "Contact EQB Milano: phone, WhatsApp, email and how to reach us. Viale Regina Margherita 43, 20122 Milano, Cinque Giornate area."
);

export default function EnContatti() {
  return (
    <main className="w-full relative">
      <Navbar />
      <ContattiPage />
      <Footer />
    </main>
  );
}
