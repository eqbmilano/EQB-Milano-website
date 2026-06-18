import {
  Navbar,
  Hero,
  SectionEcosistema,
  SectionSpazio,
  ParallaxDivider,
  SectionPercheScegliere,
  SectionInterno,
  SectionVisione,
  SectionRecensioni,
  Footer,
  FixedBackground,
} from "@/components";
import Link from "next/link";
import { ClienteSwitch } from "./ClienteSwitch";
import "./entry-e.css";

export const metadata = { title: "Variante E — Home + deviatore — EQB Milano" };

export default function EntryEPage() {
  return (
    <>
      <FixedBackground />
      <ClienteSwitch />
      <main className="w-full relative">
        <Navbar />
        <Hero />

        {/* ── Bivio esplicito, subito dopo l'hero ── */}
        <section className="ee-bivio">
          <div className="ee-bivio__inner">
            <span className="ee-bivio__sup">Da dove vuoi iniziare?</span>
            <div className="ee-bivio__paths">
              <Link href="/coworking" className="ee-bivio__path">
                <span className="ee-bivio__path-label">Sei un professionista?</span>
                <span className="ee-bivio__path-title">Cerchi uno spazio<br />dove far crescere il tuo lavoro</span>
                <span className="ee-bivio__path-cta">Scopri il coworking →</span>
              </Link>
              <Link href="/benessere" className="ee-bivio__path ee-bivio__path--cli">
                <span className="ee-bivio__path-label">Sei un cliente?</span>
                <span className="ee-bivio__path-title">Cerchi benessere,<br />cura e movimento per te</span>
                <span className="ee-bivio__path-cta">Scopri i trattamenti →</span>
              </Link>
            </div>
          </div>
        </section>

        <SectionEcosistema />
        <SectionSpazio />
        <ParallaxDivider />
        <SectionPercheScegliere />
        <SectionInterno />
        <SectionRecensioni />
        <SectionVisione />
        <Footer />
      </main>
    </>
  );
}
