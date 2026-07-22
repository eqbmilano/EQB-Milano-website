"use client";
import React from "react";
import "./ParallaxDivider.css";

interface ParallaxDividerProps {
  src?: string;
  /** Rapporto larghezza/altezza reale della foto (es. "1999 / 1335"): l'altezza
   * del divisore si adatta a questo invece di essere fissa, così l'immagine
   * riempie sempre la larghezza intera dello schermo senza mai croppare o
   * zoomare (a differenza di un height fisso in vh, che con foto di
   * proporzioni diverse forzava cover a tagliare pezzi di immagine). */
  ratio?: string;
  text?: string;
}

export const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ src, ratio, text }) => {
  if (!src) {
    return (
      <div className="parallax-divider" aria-hidden={!text}>
        {text && (
          <div className="parallax-divider__overlay" />
        )}
        {text && (
          <div className="parallax-divider__content">
            <span className="parallax-divider__rule" aria-hidden="true" />
            <p className="parallax-divider__text">{text}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="parallax-divider parallax-divider--own"
      style={{ backgroundImage: `url('${src}')`, aspectRatio: ratio }}
      aria-hidden={!text}
    >
      <div className="parallax-divider__overlay" />
      {text && (
        <div className="parallax-divider__content">
          <p className="parallax-divider__text">{text}</p>
        </div>
      )}
    </div>
  );
};
