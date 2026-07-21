import { Navbar, Footer, FixedBackground } from "@/components";
import { SpazioPage } from "@/components/SpazioPage";

export const metadata = {
  title: "Spazio — EQB Milano",
  description:
    "Le stanze, la sala allenamento con reformer Pilates e gli spazi comuni di EQB Milano: uno studio curato in Viale Regina Margherita 43, zona Cinque Giornate.",
  alternates: { canonical: "/spazio" },
};

export default function SpazioRoute() {
  return (
    <>
      <FixedBackground src="/assets/Spazi-sole-luna-ingresso.jpg" alt="Ingresso Stanza Sole e Stanza Luna" />
      <main className="w-full relative">
        <Navbar />
        <SpazioPage />
        <Footer />
      </main>
    </>
  );
}
