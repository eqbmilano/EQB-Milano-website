import { Navbar, Footer } from "@/components";
import { AziendePage } from "@/components/AziendePage";

export const metadata = { title: "Aziende & eventi — EQB Milano" };

export default function AziendeRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <AziendePage />
      <Footer />
    </main>
  );
}
