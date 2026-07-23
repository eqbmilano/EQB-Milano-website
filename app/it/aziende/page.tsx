import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { AziendePage } from "@/components/AziendePage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "aziende",
  "Aziende & eventi — EQB Milano",
  "Spazi per workshop, eventi e collaborazioni continuative a Milano: EQB accoglie aziende e brand del benessere in un ambiente curato in zona Cinque Giornate."
);

export default function ItAziende() {
  return (
    <main className="w-full relative">
      <Navbar />
      <AziendePage />
      <Footer />
    </main>
  );
}
