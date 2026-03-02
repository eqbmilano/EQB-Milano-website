import React from "react";
import { CTAButton } from "./CTAButton";
import "./SectionContatti.css";

export const SectionContatti: React.FC = () => {
  return (
    <section id="contatti" className="section-contatti">
      <div className="section-contatti__inner">
        <span className="section-contatti__label">CONTATTI</span>
        <h2 className="section-contatti__title">
          Inizia il tuo percorso con EQB
        </h2>
        <p className="section-contatti__subtitle">
          Scopri gli spazi disponibili, parla con il nostro team e trova la formula
          più adatta alla tua attività professionale.
        </p>
        <div className="section-contatti__actions">
          <CTAButton href="mailto:info@eqbmilano.it" variant="dark">
            SCRIVICI
          </CTAButton>
          <CTAButton href="https://wa.me/393755153273" variant="dark">
            PRENOTA UNA CALL
          </CTAButton>
        </div>

        <div className="section-contatti__info">
          <span>+39 375 515 3273</span>
          <span>·</span>
          <span>info@eqbmilano.it</span>
          <span>·</span>
          <span>Milano, Italia</span>
        </div>
      </div>
    </section>
  );
};
