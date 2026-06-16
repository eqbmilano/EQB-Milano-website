import { Navbar, Footer } from "@/components";
import { SpazioPage } from "@/components/SpazioPage";

export const metadata = { title: "Spazio — EQB Milano" };

export default function SpazioRoute() {
  return (
    <main className="w-full relative">
      <Navbar />
      <SpazioPage />
      <Footer />
    </main>
  );
}
