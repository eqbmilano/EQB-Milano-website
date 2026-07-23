import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { ContattiPage } from "@/components/ContattiPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "contatti",
  "Contatti — EQB Milano",
  "Contatta EQB Milano: telefono, WhatsApp, email e come raggiungerci. Viale Regina Margherita 43, 20122 Milano, zona Cinque Giornate."
);

export default function ItContatti() {
  return (
    <main className="w-full relative">
      <Navbar />
      <ContattiPage />
      <Footer />
    </main>
  );
}
