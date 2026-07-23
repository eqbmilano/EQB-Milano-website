"use client";
import React, { useRef, useCallback } from "react";
import { Reveal, useReveal } from "./Reveal";
import "./SectionPercheScegliere.css";

const cards = [
  { value: "0",    title: "Costi fissi",    desc: "Nessun contratto. Nessun affitto mensile. Paghi solo le ore che usi." },
  { value: "20+",  title: "Professionisti", desc: "Una community di trainer e terapisti che collabora, cresce e costruisce percorsi integrati per i clienti." },
  { value: "1 km",  title: "Dal Duomo",     desc: "Piazza Cinque Giornate. Un quartiere vivo, centrale, circondato da una Milano che si muove." },
  { value: "1°",   title: "In Italia",      desc: "Un modello che non esisteva. Abbiamo costruito da zero qualcosa che il settore non aveva mai visto." },
];

function TiltCard({ card }: { card: typeof cards[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform 0.08s, box-shadow 0.08s";
    el.style.transform = `perspective(700px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) scale(1.04)`;
    el.style.boxShadow = `${x * -28}px ${y * -28}px 60px rgba(50,37,35,0.20), 0 8px 32px rgba(50,37,35,0.10)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current!;
    el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = "";
    el.style.boxShadow = "";
  }, []);

  return (
    <div ref={ref} className="pcard" onMouseMove={onMove} onMouseLeave={onLeave}>
      <span className="pcard__value">{card.value}</span>
      <h3 className="pcard__title">{card.title}</h3>
      <p className="pcard__desc">{card.desc}</p>
    </div>
  );
}

function VeroWord() {
  // Self-triggered: la sottolineatura si disegna quando la parola entra in
  // vista (stesso principio di <Reveal>), senza dipendere da un observer di
  // sezione.
  const { ref, visible } = useReveal();
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={`perche__vero${visible ? " perche__vero--on" : ""}`}>
      vero
      <svg className="perche__vero-line" viewBox="0 0 60 8" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 5 Q10 1 20 5 Q30 9 40 5 Q50 1 59 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export const SectionPercheScegliere: React.FC = () => {
  // Linea guida animazioni: NIENTE observer unico di sezione con stagger CSS
  // (faceva partire tutto insieme, cosi' card e statement erano gia' fermi
  // quando li scrollavi). Ogni elemento e ogni card e' avvolto nel suo
  // <Reveal>, con il proprio IntersectionObserver: compare quando entra LUI
  // in vista. Stesso meccanismo di SectionSpazio.
  return (
    <section id="coworking" className="section-perche">
      <div className="perche__inner">

        <div className="perche__header">
          <Reveal as="span" className="perche__label">COWORKING</Reveal>
          <Reveal as="h2" delay={80} className="perche__title">Nessuno lo fa<br />come noi.</Reveal>
          <Reveal as="p" delay={160} className="perche__subtitle">
            Il primo,&nbsp;<VeroWord />,&nbsp;coworking polifunzionale ad ore per trainer e terapisti.
          </Reveal>
        </div>

        <div className="perche__grid-2x2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <TiltCard card={c} />
            </Reveal>
          ))}
        </div>

        <div className="perche__statement">
          <Reveal className="statement__lines">
            <p className="statement__line">Non è una palestra.</p>
            <p className="statement__line">Non è uno studio tradizionale.</p>
            <p className="statement__line">Non è un coworking generico.</p>
          </Reveal>
          <Reveal delay={80}><div className="statement__divider" /></Reveal>
          <Reveal as="p" delay={140} className="statement__coda">EQB.</Reveal>
          <Reveal delay={200}>
            <a href="/coworking" className="statement__cta">UNISCITI AL TEAM</a>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
