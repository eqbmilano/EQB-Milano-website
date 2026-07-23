"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLanguageSwitch } from "@/lib/use-language-switch";
import { SocialLinks } from "./SocialIcons";
import "./MenuOverlay.css";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const t = useTranslations("menu");
  const tNav = useTranslations("nav");
  const locale = pathname.split("/")[1] || "it";
  const { targetLocale, targetHref, setCookie } = useLanguageSwitch();

  const NAV_GROUPS = [
    { label: t("groupProfessionisti"), items: [
      { label: t("coworking"), href: `/${locale}/coworking` },
      { label: t("spazio"), href: `/${locale}/spazio` },
      { label: t("visione"), href: `/${locale}/visione` },
    ] },
    { label: t("groupTe"), items: [
      { label: t("benessere"), href: `/${locale}/benessere` },
    ] },
    { label: t("groupInfo"), items: [
      { label: t("contatti"), href: `/${locale}/contatti` },
    ] },
  ];
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

  // Freccia "reveal" (solo mobile): porta alla sezione social/contatti in fondo
  const scrollToContacts = () => {
    overlayRef.current
      ?.querySelector<HTMLElement>(".menu-overlay__socials")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="menu-overlay__bg" />

      {/* Icona lingua — in alto, a fianco della X (hamburger trasformato, in Navbar) */}
      <a
        href={targetHref}
        onClick={setCookie}
        className="menu-overlay__lang-btn"
        aria-label={`${tNav("switchLanguage")} (${targetLocale.toUpperCase()})`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" />
        </svg>
        <span>{targetLocale.toUpperCase()}</span>
      </a>

      <div className="menu-overlay__grid">

        {/* Colonna sinistra: logo → social → contatti */}
        <div className="menu-overlay__left">

          <div className="menu-overlay__logo">
            <Link href={`/${locale}`} onClick={onClose} aria-label={t("home")}>
              <Image
                src="/assets/Logo-Bianco.svg"
                alt="EQB Milano"
                width={80}
                height={40}
              />
            </Link>
          </div>

          <div className="menu-overlay__socials">
            <SocialLinks variant="light" size={20} iconStyle="circle" />
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
                Viale Regina Margherita 43, 20122
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

        {/* Freccia "reveal" minimal (solo mobile): scorre a social + contatti */}
        <button
          type="button"
          className="menu-overlay__reveal"
          onClick={scrollToContacts}
          aria-label={t("socialReveal")}
        >
          <span className="menu-overlay__reveal-label">{t("socialReveal")}</span>
          <svg className="menu-overlay__reveal-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

      </div>
    </div>
  );
};
