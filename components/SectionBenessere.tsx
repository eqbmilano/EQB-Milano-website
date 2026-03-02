import React from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./SectionBenessere.css";

export const SectionBenessere: React.FC = () => {
  return (
    <section id="benessere" className="section-benessere">
      <div className="section-benessere__header">
        <span className="section-benessere__label">BENESSERE</span>
        <h2 className="section-benessere__title">
          Due anime, un unico spazio
        </h2>
      </div>

      <div className="section-benessere__grid">
        {/* Colonna Movimento */}
        <div className="section-benessere__col">
          <div className="section-benessere__image-wrap">
            <Image
              src="/assets/Pilates.jpg"
              alt="Movimento — Pilates"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className="section-benessere__tag">MOVIMENTO</span>
          </div>
          <div className="section-benessere__col-text">
            <h3>Muoviti con consapevolezza</h3>
            <p>
              Sale dedicate a yoga, pilates, functional training e ogni forma di
              movimento guidato da professionisti certificati.
            </p>
            <CTAButton href="#contatti" variant="dark">
              PRENOTA →
            </CTAButton>
          </div>
        </div>

        {/* Colonna Benessere */}
        <div className="section-benessere__col">
          <div className="section-benessere__image-wrap">
            <Image
              src="/assets/Massaggio-viso.jpg"
              alt="Benessere — Trattamenti"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <span className="section-benessere__tag">TRATTAMENTI</span>
          </div>
          <div className="section-benessere__col-text">
            <h3>Prenditi cura di te</h3>
            <p>
              Massaggi, osteopatia, fisioterapia e trattamenti estetici.
              Professionisti selezionati in un ambiente pensato per il relax.
            </p>
            <CTAButton href="#contatti" variant="dark">
              SCOPRI →
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
