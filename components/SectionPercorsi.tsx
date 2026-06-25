"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import "./SectionPercorsi.css";

const Arrow = () => (
  <svg className="percorso-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
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

  return (
    <section ref={ref} className={`section-percorsi${visible ? " is-visible" : ""}`}>
      <div className="section-percorsi__inner">
        <h2 className="section-percorsi__heading pc-anim pc-anim--1">A chi è dedicato EQB?</h2>
        <div className="section-percorsi__cards">
          <Link href="/coworking" className="percorso-card pc-anim pc-anim--2">
            <span className="percorso-card__kicker">Sono un professionista</span>
            <p className="percorso-card__text">Cerco uno spazio dove lavorare, crescere e costruire relazioni.</p>
            <span className="percorso-card__cta">Scopri il coworking <Arrow /></span>
          </Link>
          <Link href="/benessere" className="percorso-card pc-anim pc-anim--3">
            <span className="percorso-card__kicker">Cerco un professionista</span>
            <p className="percorso-card__text">Voglio trovare il percorso o l&rsquo;attività più adatta alle mie esigenze.</p>
            <span className="percorso-card__cta">Scopri il benessere <Arrow /></span>
          </Link>
        </div>
      </div>
    </section>
  );
};
