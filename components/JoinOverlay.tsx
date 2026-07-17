"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./JoinOverlay.css";

interface JoinOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinOverlay: React.FC<JoinOverlayProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // ESC per chiudere + focus al primo link all'apertura, ripristino alla chiusura
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement as HTMLElement | null;
    overlayRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={overlayRef}
      className={`join-overlay${isOpen ? " join-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <button className="join-overlay__close" onClick={onClose} aria-label="Chiudi">
        &#10005;
      </button>

      <div className="join-overlay__grid">
        <Link href="/candidatura" className="join-overlay__half" onClick={onClose}>
          <div className="join-overlay__bg">
            <Image src="/assets/Sala-Allenamento.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="join-overlay__scrim" />
          <div className="join-overlay__content">
            <span className="join-overlay__kicker">Sei un professionista?</span>
            <h2 className="join-overlay__title">Porta il tuo lavoro dove può crescere.</h2>
            <span className="join-overlay__cta">Candidati &#8594;</span>
          </div>
        </Link>

        <Link href="/contatti" className="join-overlay__half" onClick={onClose}>
          <div className="join-overlay__bg">
            <Image src="/assets/Massaggio-viso.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="join-overlay__scrim" />
          <div className="join-overlay__content">
            <span className="join-overlay__kicker">Cerchi un percorso?</span>
            <h2 className="join-overlay__title">Trova la persona giusta per stare meglio.</h2>
            <span className="join-overlay__cta">Scrivici &#8594;</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
