"use client";
import React from "react";
import "./ParallaxDivider.css";

interface ParallaxDividerProps {
  src?: string;
  text?: string;
  /* Su desktop, quando manca "src", il varco resta trasparente e rivela il
     FixedBackground della pagina (comportamento invariato, effetto
     parallasse voluto). Su mobile invece questa immagine è quella da
     mostrare come foto normale del divisorio — serve solo ai due divider
     che su desktop usano il trucco FixedBackground invece di una src
     propria. */
  mobileSrc?: string;
}

export const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ src, text, mobileSrc }) => {
  // Su mobile niente più trucchi di sfondo/fisso: ogni divisorio è una
  // semplice foto in flusso normale (stile thriom.com), stesso riquadro
  // 35vh/larghezza piena per tutti, sia che desktop usi una src propria
  // sia che usi il varco sul FixedBackground.
  const imgForMobile = src ?? mobileSrc;

  return (
    <div
      className={`parallax-divider${src ? " parallax-divider--own" : ""}`}
      style={src ? { backgroundImage: `url('${src}')` } : undefined}
      aria-hidden={!text}
    >
      {imgForMobile && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="parallax-divider__mobile-img" src={imgForMobile} alt="" aria-hidden="true" />
      )}
      {(src || text) && <div className="parallax-divider__overlay" />}
      {text && (
        <div className="parallax-divider__content">
          {!src && <span className="parallax-divider__rule" aria-hidden="true" />}
          <p className="parallax-divider__text">{text}</p>
        </div>
      )}
    </div>
  );
};
