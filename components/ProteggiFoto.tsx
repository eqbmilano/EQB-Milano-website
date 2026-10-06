"use client";

import { useEffect } from "react";

// Niente "Salva immagine" con il clic destro sulle foto e sui video del sito
// (Mattia, 06/10/2026: le foto non si devono poter scaricare). Non e' una
// barriera vera: chi vuole fa uno screenshot. Toglie il gesto facile, e insieme
// alle foto ridotte con la filigrana (scripts/foto-per-il-web.mjs) quello che
// resta non vale piu' molto. Sul resto della pagina il clic destro funziona.
export default function ProteggiFoto() {
  useEffect(() => {
    const blocca = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("img, picture, video") || getComputedStyle(t).backgroundImage !== "none") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", blocca);
    document.addEventListener("dragstart", blocca);
    return () => {
      document.removeEventListener("contextmenu", blocca);
      document.removeEventListener("dragstart", blocca);
    };
  }, []);
  return null;
}
