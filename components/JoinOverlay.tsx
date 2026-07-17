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
      {/* Sfondo brand, lo stesso del menu hamburger */}
      <div className="join-overlay__bg">
        <Image
          src="/assets/Sfondo-Menu-Hamburger.jpg"
          alt=""
          fill
          priority
          quality={85}
          style={{ objectFit: "cover" }}
        />
        <div className="join-overlay__bg-overlay" />
      </div>

      <button className="join-overlay__close" onClick={onClose} aria-label="Chiudi">
        &#10005;
      </button>

      <div className="join-overlay__stack">
        <Link href="/candidatura" className="join-overlay__row join-overlay__row--1" onClick={onClose}>
          <span className="join-overlay__kicker">Sei un professionista?</span>
          <span className="join-overlay__action">
            Candidati <span className="join-overlay__arrow" aria-hidden="true">&#8594;</span>
          </span>
        </Link>

        <span className="join-overlay__rule join-overlay__row--2" aria-hidden="true" />

        <Link href="/contatti" className="join-overlay__row join-overlay__row--3" onClick={onClose}>
          <span className="join-overlay__kicker">Cerchi un percorso?</span>
          <span className="join-overlay__action">
            Scrivici <span className="join-overlay__arrow" aria-hidden="true">&#8594;</span>
          </span>
        </Link>
      </div>
    </div>
  );
};
