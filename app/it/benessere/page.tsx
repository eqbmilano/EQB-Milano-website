import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { BenesserePageV2 } from "@/components/BenesserePageV2";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "benessere",
  "Benessere — EQB Milano",
  "Osteopatia, fisioterapia, Pilates, massaggi e nutrizione a Milano: percorsi personalizzati con professionisti selezionati, in un unico spazio in zona Cinque Giornate."
);

export default function ItBenessere() {
  return (
    <main className="w-full relative">
      <Navbar />
      <BenesserePageV2 />
      <Footer />
    </main>
  );
}
