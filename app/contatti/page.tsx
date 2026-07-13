import { Navbar, Footer } from "@/components";
import { ContattiPage } from "@/components/ContattiPage";

export const metadata = {
  title: "Contatti",
  description:
    "Contatta EQB Milano: telefono, WhatsApp, email e come raggiungerci. Viale Regina Margherita 43, 20122 Milano, zona Cinque Giornate.",
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
