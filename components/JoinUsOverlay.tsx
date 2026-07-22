"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Multiline } from "./Multiline";
import "./JoinUsOverlay.css";

interface JoinUsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinUsOverlay: React.FC<JoinUsOverlayProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("joinUs");
  if (!isOpen) return null;

  return (
    <div className="joinus-overlay joinus-overlay--open">

      {/* Chiudi */}
      <button className="joinus-close" onClick={onClose} aria-label={t("close")}>
        <span className="joinus-close__line" />
        <span className="joinus-close__line" />
      </button>

      {/* Pannello sinistro — Professionisti */}
      <div className="joinus-panel">
        <div className="joinus-panel__photo">
          <Image
            src="/assets/join-professionista.jpg"
            alt={t("professionista.title")}
            fill
            sizes="50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>

        <div className="joinus-card">
          <h2 className="joinus-card__title"><Multiline text={t("professionista.title")} /></h2>
          <p className="joinus-card__body">{t("professionista.body")}</p>
          <a href="#visione" className="joinus-card__cta" onClick={onClose}>
            <span className="joinus-card__cta-icon">→</span>
            {t("professionista.cta")}
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
            alt={t("benessere.title")}
            fill
            sizes="50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
        </div>

        <div className="joinus-card">
          <h2 className="joinus-card__title"><Multiline text={t("benessere.title")} /></h2>
          <p className="joinus-card__body">{t("benessere.body")}</p>
          <a href="#benessere" className="joinus-card__cta" onClick={onClose}>
            <span className="joinus-card__cta-icon">→</span>
            {t("benessere.cta")}
          </a>
        </div>
      </div>

    </div>
  );
};
