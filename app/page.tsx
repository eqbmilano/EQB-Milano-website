import type { Metadata } from "next";
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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <FixedBackground />
      <main className="w-full relative">
        <Navbar />
        <Hero />
        <SectionEcosistema />
        <SectionSpazio />
        <ParallaxDivider mobileSrc="/assets/Massaggio-viso.jpg" />
        <SectionPercheScegliere />
        <SectionInterno />
        <SectionRecensioni />
        <SectionVisione />
        <Footer />
      </main>
    </>
  );
}
