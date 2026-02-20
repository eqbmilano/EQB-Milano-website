import React from "react";
import "./Essenza.css";

export const Essenza: React.FC = () => {
  return (
    <section className="essenza" id="essenza">
      <div className="essenza-content">
        <div className="essenza-label">L'ESSENZA</div>

        <p className="essenza-text">
          Uno spazio di coworking dedicato al benessere e al movimento.
        </p>

        <p className="essenza-description">
          Pensato per professionisti che cercano qualità, continuità e visione,
          all'interno di un ecosistema che supporta lavoro, crescita e relazioni.
        </p>

        <p className="essenza-tagline">
          Semplice. Flessibile. Professionale.
        </p>
      </div>
    </section>
  );
};
