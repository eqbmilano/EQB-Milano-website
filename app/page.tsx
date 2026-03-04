import {
  Navbar,
  Hero,
  SectionEcosistema,
  SectionSpazio,
  ParallaxDivider,
  SectionPercheScegliere,
  SectionInterno,
  SectionBenessere,
  SectionContatti,
  Footer,
  FixedBackground,
} from "@/components";

export default function Home() {
  return (
    <>
      <FixedBackground />
      <main className="w-full overflow-hidden relative">
        <Navbar />
        <Hero />
        <SectionEcosistema />
        <SectionSpazio />
        <ParallaxDivider />
        <SectionPercheScegliere />
        <SectionInterno />
        <SectionBenessere />
        <SectionContatti />
        <Footer />
      </main>
    </>
  );
}
