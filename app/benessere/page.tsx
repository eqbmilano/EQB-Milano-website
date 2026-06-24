import { Navbar, Footer } from "@/components";
import { BenesserePageV2 } from "@/components/BenesserePageV2";

export const metadata = { title: "Benessere — EQB Milano" };

export default function BenessrerePage() {
  return (
    <main className="w-full relative">
      <Navbar />
      <BenesserePageV2 />
      <Footer />
    </main>
  );
}
