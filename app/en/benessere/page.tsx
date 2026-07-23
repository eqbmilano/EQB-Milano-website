import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { BenesserePageV2 } from "@/components/BenesserePageV2";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "en",
  "benessere",
  "Wellness — EQB Milano",
  "Osteopathy, physiotherapy, Pilates, massage and nutrition in Milan: personalised paths with selected professionals, all in one space in the Cinque Giornate area."
);

export default function EnBenessere() {
  return (
    <main className="w-full relative">
      <Navbar />
      <BenesserePageV2 />
      <Footer />
    </main>
  );
}
