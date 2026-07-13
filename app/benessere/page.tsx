import { Navbar, Footer } from "@/components";
import { BenesserePageV2 } from "@/components/BenesserePageV2";

export const metadata = {
  title: "Benessere",
  description:
    "Osteopatia, fisioterapia, Pilates, massaggi e nutrizione a Milano: percorsi personalizzati con professionisti selezionati, in un unico spazio in zona Cinque Giornate.",
};

export default function BenessrerePage() {
  return (
    <main className="w-full relative">
      <Navbar />
      <BenesserePageV2 />
      <Footer />
    </main>
  );
}
