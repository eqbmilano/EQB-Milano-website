import React from "react";
import Image from "next/image";
import "./SectionContatti.css";

const ArrowUpRight = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SectionContatti: React.FC = () => {
  return (
    <section id="contatti" className="section-split">

      {/* Pannello sinistro — Professionisti */}
      <div className="split-panel">
        <div className="split-panel__photo">
          <Image
            src="/assets/join-professionista.jpg"
            alt="Sei un professionista?"
            fill
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
          <div className="split-panel__gradient" />
        </div>

        <div className="split-panel__card">
          <span className="split-card__eyebrow">EQB · COWORKING</span>
          <h2 className="split-card__title">Sei un<br />professionista?</h2>
          <p className="split-card__body">
            Lavori nel benessere o nel movimento? Accedi a spazi pronti all&rsquo;uso, senza costi fissi, all&rsquo;interno di un ecosistema che favorisce collaborazione e crescita.
          </p>
          <a href="#visione" className="split-card__cta">
            Scopri gli spazi <ArrowUpRight />
          </a>
        </div>
      </div>

      {/* Divisore verticale */}
      <div className="split-divider" aria-hidden="true" />

      {/* Pannello destro — Benessere */}
      <div className="split-panel">
        <div className="split-panel__photo">
          <Image
            src="/assets/join-benessere.jpg"
            alt="Cerchi benessere?"
            fill
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
          <div className="split-panel__gradient" />
        </div>

        <div className="split-panel__card">
          <span className="split-card__eyebrow">EQB · BENESSERE</span>
          <h2 className="split-card__title">Cerchi<br />benessere?</h2>
          <p className="split-card__body">
            Professionisti selezionati, trattamenti, allenamenti e attività dedicate al benessere e al movimento, in un ambiente curato e accogliente.
          </p>
          <a href="#benessere" className="split-card__cta">
            Scopri i trattamenti <ArrowUpRight />
          </a>
        </div>
      </div>

    </section>
  );
};
