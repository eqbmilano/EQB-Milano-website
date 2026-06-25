import {
  Navbar,
  Hero,
  SectionPercorsi,
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

export default function Home() {
  return (
    <>
      <FixedBackground />
      <main className="w-full relative">
        <Navbar />
        <Hero />
        <SectionPercorsi />
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
