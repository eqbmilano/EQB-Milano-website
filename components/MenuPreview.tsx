"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./MenuOverlay.css";
import "./MenuPreview.css";

type Item = { l: string; h: string; p?: boolean };
const GROUPS: { label: string; items: Item[] }[] = [
  { label: "Per i professionisti", items: [{ l: "Coworking", h: "/coworking", p: true }, { l: "Spazio", h: "/spazio" }, { l: "Visione", h: "/visione" }] },
  { label: "Per te", items: [{ l: "Benessere", h: "/benessere", p: true }] },
  { label: "Info", items: [{ l: "Contatti", h: "/contatti" }] },
];

export const MenuPreview: React.FC = () => {
  const [labels, setLabels] = useState(true);

  return (
    <div className="menupv">
      <div className="menupv__toolbar">
        <span className="menupv__title">Preview menu — struttura reale + voci raggruppate</span>
        <div className="menupv__toggle">
          <button className={labels ? "is-on" : ""} onClick={() => setLabels(true)}>Con etichette</button>
          <button className={!labels ? "is-on" : ""} onClick={() => setLabels(false)}>Solo spaziatura</button>
        </div>
      </div>

      <div className="menu-overlay menu-overlay--open menupv__overlay">
        <div className="menu-overlay__bg">
          <Image src="/assets/Sfondo-Menu-Hamburger.jpg" alt="Sfondo Menu" fill priority quality={85} style={{ objectFit: "cover" }} />
          <div className="menu-overlay__bg-overlay" />
        </div>

        <div className="menu-overlay__grid">
          {/* Colonna sinistra invariata: logo → social → contatti */}
          <div className="menu-overlay__left">
            <div className="menu-overlay__logo">
              <Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={80} height={40} />
            </div>
            <div className="menu-overlay__socials">
              <a href="https://www.linkedin.com/company/eqbmilano" target="_blank" rel="noopener noreferrer" className="menu-overlay__social-icon" aria-label="LinkedIn">
                <Image src="/assets/Icona-LinkedIn.svg" alt="LinkedIn" width={52} height={52} />
              </a>
              <a href="https://www.instagram.com/eqbmilano/" target="_blank" rel="noopener noreferrer" className="menu-overlay__social-icon" aria-label="Instagram">
                <Image src="/assets/Icona-Instagram.svg" alt="Instagram" width={52} height={52} />
              </a>
              <a href="https://wa.me/message/ZDLNL4HKLOF6H1" target="_blank" rel="noopener noreferrer" className="menu-overlay__social-icon" aria-label="WhatsApp">
                <Image src="/assets/Icona-Whatsapp.svg" alt="WhatsApp" width={52} height={52} />
              </a>
            </div>
            <div className="menu-overlay__contacts">
              <p><a href="tel:+393755153273">+39 375 515 3273</a></p>
              <p><a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a></p>
              <p><a href="https://share.google/bu1nHJ6pAM3LBYwkU" target="_blank" rel="noopener noreferrer">Viale Regina Margherita 43, 20122, Milano</a></p>
            </div>
          </div>

          {/* Colonna destra: voci raggruppate per pubblico */}
          <nav className="menu-overlay__right">
            <div className={`menu-overlay__nav-groups${labels ? "" : " menu-overlay__nav-groups--nolabels"}`}>
              {GROUPS.map((g) => (
                <div className="menu-overlay__nav-group" key={g.label}>
                  {labels && <span className="menu-overlay__nav-label">{g.label}</span>}
                  <ul className="menu-overlay__nav-list">
                    {g.items.map((it) => (
                      <li key={it.l} className={`menu-overlay__nav-item${it.p ? " menu-overlay__nav-item--primary" : ""}`}>
                        <a href={it.h}>{it.l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
