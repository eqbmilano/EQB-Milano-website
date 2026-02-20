import React from "react";
import { CTAButton } from "./CTAButton";
import "./Coworking.css";

export const Coworking: React.FC = () => {
  return (
    <section className="coworking" id="coworking">
      <div className="coworking-container">
        <div className="coworking-content">
          <div className="coworking-label">I PROFESSIONISTI EQB</div>

          <h2 className="coworking-title">Spazio. Relazioni. Crescita.</h2>

          <p className="coworking-subtitle">
            Pay per use. Nessun costo fisso. Nessun vincolo.
          </p>

          <p className="coworking-description">
            Lavori in autonomia all'interno di un ecosistema professionale nel
            cuore di Milano.
          </p>

          <CTAButton href="#coworking" variant="light" className="coworking-cta">
            SCOPRI COME LAVORARE IN EQB →
          </CTAButton>
        </div>

        {/* Decorative Arc */}
        <svg
          className="coworking-arc"
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 300 Q 150 150 300 0"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};
