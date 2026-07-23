import type { Metadata } from "next";
import { Navbar, Footer, FixedBackground } from "@/components";
import { SpazioPage } from "@/components/SpazioPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "spazio",
  "Spazio — EQB Milano",
  "Le stanze, la sala allenamento con reformer Pilates e gli spazi comuni di EQB Milano: uno studio curato in Viale Regina Margherita 43, zona Cinque Giornate."
);

export default function ItSpazio() {
  return (
    <>
      <FixedBackground src="/assets/Spazi-sole-luna-ingresso.jpg" alt="Ingresso Stanza Sole e Stanza Luna" />
      <main className="w-full relative">
        <Navbar />
        <SpazioPage />
        <Footer />
      </main>
    </>
  );
}
