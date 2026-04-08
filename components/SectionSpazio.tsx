import React from "react";
import Image from "next/image";
import "./SectionSpazio.css";

export const SectionSpazio: React.FC = () => {
  return (
    <section id="spazio" className="section-spazio">
      <div className="section-spazio__container">
        <div className="section-spazio__content">
          <h2 className="section-spazio__title">
            Il tuo spazio,<br />
            già pronto.
          </h2>
          <p className="section-spazio__description">
            Ambientazioni curate, luce naturale e<br />
            spazi progettati per il lavoro professionale.
          </p>
          <a href="#spazi" className="section-spazio__cta">
            Scopri gli spazi <span style={{ marginLeft: "6px" }}>→</span>
          </a>
        </div>
        <div className="section-spazio__image-wrapper">
          <Image
            src="/assets/Stanza Terra.jpg"
            alt="Spazio professionale EQB"
            fill
            className="section-spazio__image"
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};
