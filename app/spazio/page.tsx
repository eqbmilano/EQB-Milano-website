import { Navbar, Footer } from "@/components";
import { SpazioPage } from "@/components/SpazioPage";

export const metadata = {
  title: "Spazio",
  description:
    "Le stanze, la sala allenamento con reformer Pilates e gli spazi comuni di EQB Milano: uno studio curato in Viale Regina Margherita 43, zona Cinque Giornate.",
};

export default function SpazioRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <SpazioPage />
      <Footer />
    </main>
  );
}
