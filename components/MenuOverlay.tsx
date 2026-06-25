"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./MenuOverlay.css";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_GROUPS = [
  { label: "Per i professionisti", items: [
    { label: "Coworking", href: "/coworking" },
    { label: "Spazio", href: "/spazio" },
    { label: "Visione", href: "/visione" },
  ] },
  { label: "Per te", items: [
    { label: "Benessere", href: "/benessere" },
  ] },
  { label: "Info", items: [
    { label: "Contatti", href: "/contatti" },
  ] },
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const groups = NAV_GROUPS
    .map((g) => ({ ...g, items: g.items.filter((it) => it.href !== pathname) }))
    .filter((g) => g.items.length > 0);

  let order = 0;

  const overlayRef = useRef<HTMLDivElement>(null);

  // ESC per chiudere + focus trap quando aperto, ripristino del focus alla chiusura
  useEffect(() => {
    if (!isOpen) return;
    const overlay = overlayRef.current;
    if (!overlay) return;
    const prev = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(overlay.querySelectorAll<HTMLElement>("a[href], button")).filter((el) => el.offsetParent !== null);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); prev?.focus?.(); };
  }, [isOpen, onClose]);

  // click sullo sfondo (fuori dai link) per chiudere
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("a, button")) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className={`menu-overlay${isOpen ? " menu-overlay--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      onClick={onOverlayClick}
    >

      {/* Sfondo */}
      <div className="menu-overlay__bg">
        <Image
          src="/assets/Sfondo-Menu-Hamburger.jpg"
          alt="Sfondo Menu"
          fill
          priority
          quality={85}
          style={{ objectFit: "cover" }}
        />
        <div className="menu-overlay__bg-overlay" />
      </div>

      <div className="menu-overlay__grid">

        {/* Colonna sinistra: logo → social → contatti */}
        <div className="menu-overlay__left">

          <div className="menu-overlay__logo">
            <Link href="/" onClick={onClose} aria-label="Home">
              <Image
                src="/assets/Logo-Bianco.svg"
                alt="EQB Milano"
                width={80}
                height={40}
              />
            </Link>
          </div>

          <div className="menu-overlay__socials">
            <a href="https://www.linkedin.com/company/eqbmilano" target="_blank" rel="noopener noreferrer"
              className="menu-overlay__social-icon" aria-label="LinkedIn">
              <Image src="/assets/Icona-LinkedIn.svg" alt="LinkedIn" width={52} height={52} />
            </a>
            <a href="https://www.instagram.com/eqbmilano/" target="_blank" rel="noopener noreferrer"
              className="menu-overlay__social-icon" aria-label="Instagram">
              <Image src="/assets/Icona-Instagram.svg" alt="Instagram" width={52} height={52} />
            </a>
            <a href="https://wa.me/message/ZDLNL4HKLOF6H1" target="_blank" rel="noopener noreferrer"
              className="menu-overlay__social-icon" aria-label="WhatsApp">
              <Image src="/assets/Icona-Whatsapp.svg" alt="WhatsApp" width={52} height={52} />
            </a>
          </div>

          <div className="menu-overlay__contacts">
            <p>
              <a href="tel:+393755153273">
                +39 375 515 3273
                <svg className="menu-contact-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </p>
            <p>
              <a href="mailto:info@eqbmilano.it">
                info@eqbmilano.it
                <svg className="menu-contact-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </p>
            <p>
              <a href="https://share.google/bu1nHJ6pAM3LBYwkU" target="_blank" rel="noopener noreferrer">
                Viale Regina Margherita 43, 20122, Milano
                <svg className="menu-contact-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </p>
          </div>

        </div>

        {/* Colonna destra: voci di navigazione raggruppate per pubblico */}
        <nav className="menu-overlay__right">
          <div className="menu-overlay__nav-groups">
            {groups.map((g) => {
              const labelDelay = 0.18 + order * 0.06;
              return (
                <div className="menu-overlay__nav-group" key={g.label}>
                  <span className="menu-overlay__nav-label" style={{ animationDelay: `${labelDelay}s` }}>
                    {g.label}
                  </span>
                  <ul className="menu-overlay__nav-list">
                    {g.items.map((item) => {
                      order += 1;
                      return (
                        <li
                          key={item.label}
                          className="menu-overlay__nav-item"
                          style={{ animationDelay: `${0.18 + order * 0.06}s` }}
                        >
                          <a href={item.href} onClick={onClose}>{item.label}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </nav>

      </div>
    </div>
  );
};
