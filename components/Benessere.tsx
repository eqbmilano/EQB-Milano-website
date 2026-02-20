import React from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./Benessere.css";

export const Benessere: React.FC = () => {
  return (
    <section className="benessere" id="benessere">
      <div className="benessere-container">
        {/* Colonna Sinistra - Movimento */}
        <div className="benessere-column">
          <div className="benessere-image">
            <Image
              src="/assets/Pilates.jpg"
              alt="Pilates e allenamento consapevole"
              fill
              className="image-fill"
            />
          </div>

          <div className="benessere-content">
            <div className="benessere-label">MOVIMENTO</div>
            <h3 className="benessere-title">
              Pilates e allenamento consapevole.
            </h3>
            <CTAButton href="#movimento" variant="dark" className="benessere-cta">
              SCOPRI IL MOVIMENTO →
            </CTAButton>
          </div>
        </div>

        {/* Colonna Destra - Benessere */}
        <div className="benessere-column">
          <div className="benessere-image">
            <Image
              src="/assets/Massaggio-viso.jpg"
              alt="Trattamenti dedicati al corpo"
              fill
              className="image-fill"
            />
          </div>

          <div className="benessere-content">
            <div className="benessere-label">BENESSERE</div>
            <h3 className="benessere-title">
              Trattamenti dedicati al corpo.
            </h3>
            <CTAButton href="#benessere" variant="dark" className="benessere-cta">
              SCOPRI I TRATTAMENTI →
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
