import React from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./Spazio.css";

export const Spazio: React.FC = () => {
  return (
    <section className="spazio" id="spazio">
      <div className="spazio-container">
        {/* Image - Left */}
        <div className="spazio-image">
          <Image
            src="/assets/Sala-Allenamento.jpg"
            alt="Sala di allenamento EQB"
            fill
            className="image-fill"
            priority
          />
        </div>

        {/* Content - Right */}
        <div className="spazio-content">
          <div className="spazio-label">LO SPAZIO</div>

          <h2 className="spazio-title">Il tuo studio, già pronto.</h2>

          <p className="spazio-description">
            Ambientazioni curate, luce naturale e spazi progettati per il lavoro
            professionale.
          </p>

          <CTAButton href="#spazio" variant="dark" className="spazio-cta">
            SCOPRI LO SPAZIO →
          </CTAButton>

          <p className="spazio-location">
            PIAZZA CINQUE GIORNATE — MILANO
          </p>
        </div>
      </div>
    </section>
  );
};
