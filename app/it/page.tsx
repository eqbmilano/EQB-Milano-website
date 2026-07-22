import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import {
  Navbar,
  Hero,
  SectionEcosistema,
  SectionSpazio,
  ParallaxDivider,
  SectionPercheScegliere,
  SectionInterno,
  SectionVisione,
  SectionRecensioni,
  Footer,
  FixedBackground,
} from "@/components";

export const metadata: Metadata = buildPageMetadata(
  "it",
  "",
  "EQB Milano — Wellness & Fitness Coworking",
  "Wellness & Fitness Coworking a Milano. Spazio, Relazioni, Crescita."
);

export default function ItHome() {
  return (
    <>
      <FixedBackground />
      <main className="w-full relative">
        <Navbar />
        <Hero />
        <SectionEcosistema />
        <SectionSpazio />
        <ParallaxDivider />
        <SectionPercheScegliere />
        <SectionInterno />
        <SectionRecensioni />
        <SectionVisione />
        <Footer />
      </main>
    </>
  );
}
