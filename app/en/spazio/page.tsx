import type { Metadata } from "next";
import { Navbar, Footer, FixedBackground } from "@/components";
import { SpazioPage } from "@/components/SpazioPage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "spazio",
  "Space — EQB Milano",
  "The rooms, the training room with Pilates reformers and the shared spaces of EQB Milano: a curated studio in Viale Regina Margherita 43, Cinque Giornate area."
);

export default function EnSpazio() {
  return (
    <>
      <FixedBackground src="/assets/Spazi-sole-luna-ingresso.jpg" alt="Entrance to Stanza Sole and Stanza Luna" />
      <main className="w-full relative">
        <Navbar />
        <SpazioPage />
        <Footer />
      </main>
    </>
  );
}
