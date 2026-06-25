"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import "./SectionPercorsi.css";

const ArrowRight = () => (
  <svg className="percorso-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ArrowDown = () => (
  <svg className="percorso-card__arrow percorso-card__arrow--down" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const SectionPercorsi: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "-80px", threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const continua = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("ecosistema")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={ref} className={`section-percorsi${visible ? " is-visible" : ""}`}>
      <div className="section-percorsi__inner">
        <h2 className="section-percorsi__heading pc-anim pc-anim--1">A chi è dedicato EQB?</h2>
        <div className="section-percorsi__cards">
          {/* Professionista: resta nella home, continua il percorso */}
          <a href="#ecosistema" onClick={continua} className="percorso-card pc-anim pc-anim--2">
            <span className="percorso-card__kicker">Sei un professionista?</span>
            <p className="percorso-card__text">Scopri come EQB può diventare il tuo spazio di lavoro.</p>
            <span className="percorso-card__cta">Continua a scoprire <ArrowDown /></span>
          </a>
          {/* Cliente: uscita dedicata al benessere */}
          <Link href="/benessere" className="percorso-card pc-anim pc-anim--3">
            <span className="percorso-card__kicker">Cerchi un professionista?</span>
            <p className="percorso-card__text">Trova il percorso e la persona più adatta a te.</p>
            <span className="percorso-card__cta">Scopri i servizi <ArrowRight /></span>
          </Link>
        </div>
      </div>
    </section>
  );
};
