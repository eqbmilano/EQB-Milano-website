import { FixedBackground, Navbar, Hero, SectionEcosistema, SectionSpazio } from "@/components";

export const metadata = { title: "Preview — Hero pinned + bivio" };

export default function PreviewHeroPage() {
  return (
    <>
      <FixedBackground />
      <main className="w-full relative">
        <Navbar />
        <Hero />
        <SectionEcosistema />
        <SectionSpazio />
      </main>
    </>
  );
}
