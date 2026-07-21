import Image from "next/image";
import { Navbar, Footer } from "@/components";
import { Reveal } from "@/components/Reveal";
import { VisionePillars } from "@/components/VisionePillars";
import "./visione.css";

export const metadata = {
  title: "Visione — EQB Milano",
  description:
    "La storia e la missione di EQB Milano: costruire la prima catena di studi in coworking per la terapia, il movimento e il benessere in Italia.",
  alternates: { canonical: "/visione" },
};

export default function VisionePage() {
  return (
    <main className="w-full relative">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="vis-hero">
        <div className="vis-hero__inner">
          <Reveal><span className="vis-label">Visione</span></Reveal>
          <Reveal delay={80}>
            <h1 className="vis-hero__title">La nostra storia</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="vis-hero__sub">Conosci il team e scopri la nostra missione.</p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. CHI SIAMO ── */}
      <section className="vis-chisiamo">
        <div className="vis-chisiamo__inner">
          <div className="vis-chisiamo__text">
            <Reveal><span className="vis-label">Chi siamo</span></Reveal>
            <Reveal delay={80}>
              <h2 className="vis-chisiamo__title">
                EQB non è solo<br />uno spazio fisico.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="vis-chisiamo__body">
                È una realtà innovativa nel settore del benessere psicofisico,
                dedicata a professionisti del benessere e del movimento.
                Un ecosistema che unisce spazi, persone e opportunità.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120} className="vis-chisiamo__photo">
            <Image
              src="/assets/Reception-Sala-Attesa.jpg"
              alt="EQB Milano studio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Reveal>
        </div>
      </section>

      {/* ── 3. MISSIONE ── */}
      <section className="vis-missione">
        <div className="vis-missione__inner">
          <Reveal><span className="vis-label vis-label--center">La nostra visione</span></Reveal>
          <Reveal delay={80}>
            <h2 className="vis-missione__title">Abbiamo una missione...</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="vis-missione__body">
              ...creare la prima, vera, catena di studi polifunzionali in coworking
              per la terapia, il movimento e il benessere in Italia. Uno spazio curato,
              selezionato, dove crescere davvero, non solo affittare una stanza.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4. PILASTRI ── */}
      <section className="vis-pillars">
        <VisionePillars />
      </section>

      {/* ── 5. FONDATORI ── */}
      <section className="vis-team">
        <div className="vis-team__inner">
          <Reveal>
            <span className="vis-label vis-label--center">Team</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="vis-team__title">Conosci i fondatori</h2>
          </Reveal>

          {/* Marco */}
          <div className="vis-founder">
            <Reveal className="vis-founder__photo">
              <Image
                src="/assets/visione-marco.jpg"
                alt="Marco Adinolfi, co-fondatore di EQB Milano"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
            <Reveal delay={100} className="vis-founder__text">
              <h3 className="vis-founder__name">Marco Adinolfi</h3>
              <p className="vis-founder__role">Co-fondatore · Direzione Strategica &amp; Sviluppo Attività</p>
              <p className="vis-founder__bio">
                Marco si occupa dello sviluppo imprenditoriale e della gestione strategica
                di EQB. Coordina l&rsquo;organizzazione dello studio, il posizionamento
                del brand e la crescita del progetto, con l&rsquo;obiettivo di creare uno
                spazio in cui i professionisti del movimento e della salute possano
                lavorare al meglio.
              </p>
            </Reveal>
          </div>

          {/* Federico */}
          <div className="vis-founder vis-founder--reverse">
            <Reveal delay={100} className="vis-founder__text">
              <h3 className="vis-founder__name">Federico Mondin</h3>
              <p className="vis-founder__role">Co-fondatore · Direzione Clinica &amp; Coordinamento Professionisti</p>
              <p className="vis-founder__bio">
                Federico, Osteopata e studente di Fisioterapia, rappresenta il riferimento
                clinico di EQB. Supervisiona la qualità dei trattamenti e coordina
                la collaborazione tra i professionisti che operano nello studio,
                con l&rsquo;obiettivo di costruire percorsi personalizzati e integrati
                per ogni cliente.
              </p>
            </Reveal>
            <Reveal className="vis-founder__photo">
              <Image
                src="/assets/visione-federico.jpg"
                alt="Federico Mondin, co-fondatore di EQB Milano"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. CTA DARK ── */}
      <section className="vis-cta">
        <div className="vis-cta__inner">
          <div className="vis-cta__text">
            <Reveal>
              <h2 className="vis-cta__title">Entra nel<br />nostro team.</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="vis-cta__body">
                Inizia a lavorare in uno spazio curato, senza vincoli,
                all&rsquo;interno di un ecosistema che supporta la tua crescita.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a href="/contatti" className="vis-cta__btn">
                Richiedi un incontro in studio →
              </a>
            </Reveal>
          </div>

          <Reveal delay={80} className="vis-cta__mosaic">
            <div className="vis-mosaic__grid">
              <div className="vis-mosaic__item vis-mosaic__item--tall">
                <Image src="/assets/Pilates.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="vis-mosaic__item">
                <Image src="/assets/Massaggio-viso.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="vis-mosaic__item">
                <Image src="/assets/Sala-Allenamento.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="vis-mosaic__item">
                <Image src="/assets/01_Terapia_Manuale.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
