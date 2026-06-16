import { Navbar, Footer } from "@/components";
import { BenesserePage } from "@/components/BenesserePage";

export const metadata = { title: "Benessere — EQB Milano" };

export default function BenessrerePage() {
  return (
    <main className="w-full relative">
      <Navbar />
      <BenesserePage />
      <Footer />
    </main>
  );
}
