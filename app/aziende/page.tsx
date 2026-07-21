import { Navbar, Footer } from "@/components";
import { AziendePage } from "@/components/AziendePage";

export const metadata = {
  title: "Aziende & eventi — EQB Milano",
  description:
    "Spazi per workshop, eventi e collaborazioni continuative a Milano: EQB accoglie aziende e brand del benessere in un ambiente curato in zona Cinque Giornate.",
  alternates: { canonical: "/aziende" },
};

export default function AziendeRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <AziendePage />
      <Footer />
    </main>
  );
}
