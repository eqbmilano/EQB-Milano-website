import React from "react";
import { CTAButton } from "./CTAButton";
import "./Contatti.css";

export const Contatti: React.FC = () => {
  return (
    <section className="contatti" id="contatti">
      <div className="contatti-container">
        <h2 className="contatti-headline">Inizia da qui.</h2>

        <div className="contatti-info">
          <div className="info-item">
            <p className="info-label">Indirizzo</p>
            <p className="info-text">
              Piazza Cinque Giornate<br />
              20129 Milano, Italia
            </p>
          </div>

          <div className="info-item">
            <p className="info-label">WhatsApp</p>
            <a href="https://wa.me/39XXXXXXXXX" className="info-text">
              +39 (0) 2 ______
            </a>
          </div>

          <div className="info-item">
            <p className="info-label">Email</p>
            <a href="mailto:info@eqbmilano.it" className="info-text">
              info@eqbmilano.it
            </a>
          </div>
        </div>

        <CTAButton href="#" variant="light" className="contatti-cta">
          JOIN US →
        </CTAButton>
      </div>
    </section>
  );
};
