import React from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import "./SectionSpazio.css";

export const SectionSpazio: React.FC = () => {
  return (
    <section id="spazio" className="section-spazio">
      <div className="section-spazio__grid">
        <div className="section-spazio__text">
          <span className="section-spazio__label">SPAZIO</span>
          <h2 className="section-spazio__title">
            Un luogo progettato per chi lavora nel benessere
          </h2>
          <p className="section-spazio__body">
            EQB è uno spazio professionale a Milano dedicato a professionisti del fitness,
            della medicina olistica e del benessere. Uffici, sale trattamento e aree comuni
            pensate per favorire collaborazione e crescita.
          </p>
          <CTAButton href="#contatti" variant="dark">
            SCOPRI LO SPAZIO
          </CTAButton>
        </div>

        <div className="section-spazio__image">
          <Image
            src="/assets/Reception-Sala-Attesa.jpg"
            alt="Reception EQB Milano"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
