import {
  Navbar,
  Hero,
  SectionSpazio,
  ParallaxDivider,
  SectionPercheScegliere,
  SectionInterno,
  SectionBenessere,
  SectionContatti,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <SectionSpazio />
      <ParallaxDivider />
      <SectionPercheScegliere />
      <SectionInterno />
      <SectionBenessere />
      <SectionContatti />
      <Footer />
    </main>
  );
}
