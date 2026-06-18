"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./CoworkingFunnel.css";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.04)`;
    el.style.boxShadow = `${x * -28}px ${y * -28}px 60px rgba(50,37,35,0.18), 0 8px 32px rgba(50,37,35,0.08)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
    el.style.boxShadow = "";
  };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

function useVisible(rootMargin = "-100px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { rootMargin, threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, visible };
}

const pains = [
  {
    n: "01",
    title: "I clienti non sono mai davvero tuoi.",
    body: "Lavori nello studio di qualcun altro, e i suoi clienti restano suoi. Il giorno che cambi, riparti da zero. Stai costruendo il pacchetto di un altro, non il tuo.",
  },
  {
    n: "02",
    title: "Lavori tanto, ti resta poco.",
    body: "Percentuali sullo studio, trattenute su ogni seduta, condizioni decise da qualcun altro. Più clienti porti, più grande è la fetta che lasci sul tavolo.",
  },
  {
    n: "03",
    title: "Rincorri spazi, non costruisci una base.",
    body: "Un po' a domicilio, un po' in una stanzina, un po' in un centro freddo. Nessun posto che senti tuo, nessuna identità professionale stabile.",
  },
  {
    n: "04",
    title: "Da solo, resti invisibile.",
    body: "Niente colleghi con cui confrontarti, niente referral spontanei, niente collaborazioni. Il professionista più bravo, isolato, non cresce.",
  },
];

const steps = [
  {
    n: "01",
    title: "Prenota",
    body: "Scegli gli spazi e gli orari che ti servono, con un giorno di anticipo o in tempo reale.",
  },
  {
    n: "02",
    title: "Lavori",
    body: "Trovi tutto pronto. Spazio attrezzato, ambienti curati. Tu pensi solo ai tuoi clienti.",
  },
  {
    n: "03",
    title: "Paghi",
    body: "Solo le ore che hai usato. Nessun contratto. Nessuna sorpresa a fine mese.",
  },
];

const numbers = [
  { value: "0€",   label: "Costi fissi",    sub: "Paghi solo le ore che usi" },
  { value: "20+",  label: "Professionisti", sub: "Una rete attiva di colleghi" },
  { value: "500m", label: "Dal Duomo",      sub: "Piazza Cinque Giornate, Milano" },
  { value: "1°",   label: "In Italia",      sub: "Il modello che non esisteva" },
];

const objections = [
  {
    q: "«Non ho abbastanza clienti per giustificarlo.»",
    a: "È esattamente per questo che funziona. Paghi in proporzione a quello che lavori. Se hai pochi clienti, spendi poco. Se cresci, sei già nel posto giusto.",
  },
  {
    q: "«Preferisco avere il mio studio fisso.»",
    a: "Lo capiamo. Ma hai mai calcolato il costo reale — affitto, utenze, gestione, tempo — diviso per le ore di lavoro effettivo? Il conto tende a sorprendere.",
  },
  {
    q: "«Non conosco nessuno lì.»",
    a: "Ancora per poco. In EQB si entra da soli e si scopre di non esserlo.",
  },
];

export const CoworkingFunnel: React.FC = () => {
  const s1 = useVisible("-40px");
  const s2 = useVisible("-80px");
  const s3 = useVisible("-80px");
  const s4 = useVisible("-60px");
  const s5 = useVisible("-80px");
  const s6 = useVisible("-80px");
  const s7 = useVisible("-60px");

  return (
    <>
      {/* ── 1. Opening ── */}
      <section ref={s1.ref as React.RefObject<HTMLElement>} className={`cw-opening${s1.visible ? " is-on" : ""}`}>
        <div className="cw-opening__inner">
          <h2 className="cw-opening__title cw-anim cw-anim--1">
            Hai costruito la tua<br />professionalità per anni.
            <em>Non sprecarla nella gestione.</em>
          </h2>
        </div>
        <div className="cw-opening__scroll" aria-hidden="true">
          <div className="cw-opening__scroll-line" />
        </div>
      </section>

      {/* ── 2. Pain points ── */}
      <section ref={s2.ref as React.RefObject<HTMLElement>} className={`cw-pain${s2.visible ? " is-on" : ""}`}>
        <div className="cw-pain__inner">
          <div className="cw-pain__header cw-anim cw-anim--1">
            <span className="cw-label cw-label--dark">Il problema</span>
            <h2 className="cw-pain__title">Lo sai già.</h2>
            <p className="cw-pain__intro">
              Ogni professionista del benessere che lavora in modo tradizionale
              affronta le stesse quattro frizioni. Ogni giorno.
            </p>
          </div>
          <div className="cw-pain__grid">
            {pains.map((p, i) => (
              <TiltCard key={p.n} className={`cw-pain__card cw-anim cw-anim--${i + 2}`}>
                <span className="cw-pain__n">{p.n}</span>
                <h3 className="cw-pain__card-title">{p.title}</h3>
                <p className="cw-pain__card-body">{p.body}</p>
              </TiltCard>
            ))}
          </div>
          <p className="cw-pain__close cw-anim cw-anim--6">
            Non è colpa tua. È un sistema che ti tiene dipendente.
          </p>
        </div>
      </section>

      {/* ── 3. Solution ── */}
      <section ref={s3.ref as React.RefObject<HTMLElement>} className={`cw-solution${s3.visible ? " is-on" : ""}`}>
        <div className="cw-solution__inner">
          <div className="cw-solution__text">
            <span className="cw-label cw-anim cw-anim--1">La soluzione</span>
            <h2 className="cw-solution__title cw-anim cw-anim--2">
              Abbiamo costruito<br />qualcosa di diverso.
            </h2>
            <p className="cw-solution__body cw-anim cw-anim--3">
              EQB non è un coworking generico adattato al benessere.
              È un modello costruito da zero, per chi fa questo lavoro.
              Spazi attrezzati, prenotazione flessibile, community reale.
              Paghi solo le ore che lavori. Nient'altro.
            </p>
          </div>
          <div className="cw-solution__steps">
            {steps.map((s, i) => (
              <div key={s.n} className={`cw-step cw-anim--right cw-anim--${i + 4}`}>
                <span className="cw-step__n">{s.n}</span>
                <div className="cw-step__content">
                  <h3 className="cw-step__title">{s.title}</h3>
                  <p className="cw-step__body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Numbers ── */}
      <section ref={s4.ref as React.RefObject<HTMLElement>} className={`cw-numbers${s4.visible ? " is-on" : ""}`}>
        <div className="cw-numbers__inner">
          {numbers.map((n, i) => (
            <div key={n.value} className={`cw-num cw-anim--scale cw-anim--${i + 1}`}>
              <span className="cw-num__value">{n.value}</span>
              <span className="cw-num__label">{n.label}</span>
              <span className="cw-num__sub">{n.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Community ── */}
      <section ref={s5.ref as React.RefObject<HTMLElement>} className={`cw-community${s5.visible ? " is-on" : ""}`}>
        <div className="cw-community__inner">
          <div className="cw-community__text">
            <span className="cw-label cw-label--dark cw-anim cw-anim--1">La rete</span>
            <h2 className="cw-community__title cw-anim cw-anim--2">
              Non sei un ospite.<br />Sei parte di qualcosa.
            </h2>
            <p className="cw-community__body cw-anim cw-anim--3">
              In EQB lavorano fisioterapisti, trainer, osteopati, nutrizionisti,
              psicologi. Professionisti che si conoscono, si referenziano,
              costruiscono percorsi integrati per i propri clienti.
            </p>
            <p className="cw-community__body cw-anim cw-anim--4">
              Non è un vantaggio secondario. È il cuore del modello.
              Il cliente del tuo collega è il tuo cliente potenziale —
              e viceversa. La rete vale quanto lo spazio.
            </p>
          </div>
          <div className="cw-community__image">
            <Image
              src="/assets/Workshop-Rinascere.jpg"
              alt="Workshop Rinascere EQB Milano"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* ── 6. Objections ── */}
      <section ref={s6.ref as React.RefObject<HTMLElement>} className={`cw-obj${s6.visible ? " is-on" : ""}`}>
        <div className="cw-obj__inner">
          <h2 className="cw-obj__title cw-anim cw-anim--1">
            Ci siamo già sentiti dire:
          </h2>
          <div className="cw-obj__list">
            {objections.map((o, i) => (
              <div key={i} className={`cw-obj__item cw-anim cw-anim--${i + 2}`}>
                <p className="cw-obj__q">{o.q}</p>
                <p className="cw-obj__a">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ── */}
      <section ref={s7.ref as React.RefObject<HTMLElement>} className={`cw-cta${s7.visible ? " is-on" : ""}`}>
        <div className="cw-cta__inner">
          <span className="cw-label cw-anim cw-anim--1">Il prossimo passo</span>
          <h2 className="cw-cta__title cw-anim cw-anim--2">
            Vieni a vederlo<br />di persona.
          </h2>
          <p className="cw-cta__sub cw-anim cw-anim--3">
            Trenta minuti. Zero presentazioni. Lo spazio parla da solo.
            <br />Nessun impegno — solo una visita.
          </p>
          <div className="cw-cta__actions cw-anim cw-anim--4">
            <CTAButton href="tel:+393755153273" variant="filled">
              Chiama ora — +39 375 515 3273
            </CTAButton>
            <CTAButton href="mailto:info@eqbmilano.it" variant="light">
              Scrivi per prenotare una visita
            </CTAButton>
          </div>
          <p className="cw-cta__note cw-anim cw-anim--5">
            Rispondiamo entro poche ore. Di persona, non con un bot.
          </p>
        </div>
      </section>
    </>
  );
};
