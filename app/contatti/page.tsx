import { Navbar, Footer } from "@/components";
import { ContattiPage } from "@/components/ContattiPage";

export const metadata = {
  title: "Contatti — EQB Milano",
  alternates: { canonical: "/contatti" },
};

export default function ContattiRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <ContattiPage />
      <Footer />
    </main>
  );
}
