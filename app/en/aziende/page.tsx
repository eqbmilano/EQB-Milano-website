import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { AziendePage } from "@/components/AziendePage";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "aziende",
  "Companies & events — EQB Milano",
  "Spaces for workshops, events and ongoing collaborations in Milan: EQB welcomes companies and wellness brands in a curated setting in the Cinque Giornate area."
);

export default function EnAziende() {
  return (
    <main className="w-full relative">
      <Navbar />
      <AziendePage />
      <Footer />
    </main>
  );
}
