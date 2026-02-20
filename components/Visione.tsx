import React from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./Visione.css";

export const Visione: React.FC = () => {
  return (
    <section className="visione" id="visione">
      <div className="visione-container">
        {/* Text Content - Left */}
        <div className="visione-content">
          <div className="visione-label">LA VISIONE</div>

          <h2 className="visione-title">Non è uno studio. È un ecosistema.</h2>

          <p className="visione-description">
            EQB nasce per ridefinire il modo di lavorare nel benessere psicofisico.
          </p>

          <p className="visione-description">
            Un luogo dove professionisti e clienti crescono insieme, attraverso spazi
            curati, relazioni autentiche e una visione di lungo periodo.
          </p>

          <CTAButton href="#visione" variant="dark" className="visione-cta">
            SCOPRI LA NOSTRA STORIA →
          </CTAButton>
        </div>

        {/* Image - Right */}
        <div className="visione-image">
          <Image
            src="/assets/Reception-Sala-Attesa.jpg"
            alt="Reception e sala attesa EQB"
            fill
            className="image-fill"
            priority
          />
        </div>
      </div>
    </section>
  );
};
