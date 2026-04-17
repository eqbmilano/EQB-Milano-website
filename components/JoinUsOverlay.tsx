"use client";
import React from "react";
import Image from "next/image";
import "./JoinUsOverlay.css";

interface JoinUsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinUsOverlay: React.FC<JoinUsOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="joinus-overlay joinus-overlay--open">

      {/* Chiudi */}
      <button className="joinus-close" onClick={onClose} aria-label="Chiudi">
        <span className="joinus-close__line" />
        <span className="joinus-close__line" />
      </button>

      {/* Pannello sinistro — Professionisti */}
      <div className="joinus-panel">
        <div className="joinus-panel__photo">
          <Image
            src="/assets/join-professionista.jpg"
            alt="Sei un professionista?"
            fill
            sizes="50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>

        <div className="joinus-card">
          <h2 className="joinus-card__title">Sei un<br />professionista?</h2>
          <p className="joinus-card__body">
            Spazi pronti all&rsquo;uso, senza costi fissi,
            in un ecosistema che favorisce collaborazione e crescita.
          </p>
          <a href="#visione" className="joinus-card__cta" onClick={onClose}>
            <span className="joinus-card__cta-icon">→</span>
            Scopri di più
          </a>
        </div>
      </div>

      {/* Divisore */}
      <div className="joinus-divider" aria-hidden="true" />

      {/* Pannello destro — Benessere */}
      <div className="joinus-panel">
        <div className="joinus-panel__photo">
          <Image
            src="/assets/join-benessere.jpg"
            alt="Cerchi benessere?"
            fill
            sizes="50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
        </div>

        <div className="joinus-card">
          <h2 className="joinus-card__title">Cerchi<br />benessere?</h2>
          <p className="joinus-card__body">
            Trattamenti, allenamenti e professionisti selezionati
            in un ambiente curato e accogliente.
          </p>
          <a href="#benessere" className="joinus-card__cta" onClick={onClose}>
            <span className="joinus-card__cta-icon">→</span>
            Scopri di più
          </a>
        </div>
      </div>

    </div>
  );
};
