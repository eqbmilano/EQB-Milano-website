import { Navbar, Footer, SectionBenessere, SectionInterno } from "@/components";
import { SectionContattiHome } from "@/components/SectionContattiHome";

export const metadata = { title: "Contatti — EQB Milano" };

export default function ContattiPage() {
  return (
    <main className="w-full relative">
      <Navbar />
      <SectionContattiHome />
      <SectionBenessere />
      <SectionInterno />
      <Footer />
    </main>
  );
}
