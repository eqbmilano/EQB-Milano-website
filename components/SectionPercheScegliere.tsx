"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import "./SectionPercheScegliere.css";

function useVisible(threshold = 0.2, rootMargin = "-120px") {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { setVisible(e.isIntersecting); },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, visible };
}

const cards = [
  { value: "0",    title: "Costi fissi",    desc: "Nessun contratto. Nessun affitto mensile. Paghi solo le ore che usi." },
  { value: "20+",  title: "Professionisti", desc: "Una community di trainer e terapisti che collabora, cresce e costruisce percorsi integrati per i clienti." },
  { value: "1 km",  title: "Dal Duomo",     desc: "A piedi da Piazza Cinque Giornate. Un quartiere vivo, centrale, circondato da una Milano che si muove." },
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

function VeroWord({ visible }: { visible: boolean }) {
  return (
    <span className={`perche__vero${visible ? " perche__vero--on" : ""}`}>
      vero
      <svg className="perche__vero-line" viewBox="0 0 60 8" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1 5 Q10 1 20 5 Q30 9 40 5 Q50 1 59 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export const SectionPercheScegliere: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: "-180px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="coworking" ref={sectionRef} className={`section-perche${visible ? " is-visible" : ""}`}>
      <div className="perche__inner">

        <div className="perche__header">
          <span className="perche__label perche-anim perche-anim--1">COWORKING</span>
          <h2 className="perche__title perche-anim perche-anim--2">Nessuno lo fa<br />come noi.</h2>
          <p className="perche__subtitle perche-anim perche-anim--3">
            Il primo,&nbsp;<VeroWord visible={visible} />,&nbsp;coworking polifunzionale ad ore per trainer e terapisti.
          </p>
        </div>

        <div className="perche__grid-2x2 perche-anim perche-anim--4">
          {cards.map(c => <TiltCard key={c.title} card={c} />)}
        </div>

        <div className="perche__statement perche-anim perche-anim--5">
          <div className="statement__lines">
            <p className="statement__line">Non è una palestra.</p>
            <p className="statement__line">Non è uno studio tradizionale.</p>
            <p className="statement__line">Non è un coworking generico.</p>
          </div>
          <div className="statement__divider" />
          <p className="statement__coda">EQB.</p>
          <a href="/coworking" className="statement__cta">UNISCITI AL TEAM</a>
        </div>

      </div>
    </section>
  );
};
