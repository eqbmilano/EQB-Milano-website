"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { MenuOverlay } from "./MenuOverlay";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false);
    setJoinOpen(false);
  }, [pathname]);

  // chiude il dropdown INIZIA con click fuori o ESC
  useEffect(() => {
    if (!joinOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".navbar__join")) setJoinOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setJoinOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [joinOpen]);

  useEffect(() => {
    const getBgBrightness = (): number => {
      // Sample just below the navbar (80px from top, center horizontally)
      const els = document.elementsFromPoint(window.innerWidth / 2, 80);
      for (const el of els) {
        if (el.closest(".navbar") || el.closest(".menu-overlay")) continue;
        const bg = window.getComputedStyle(el).backgroundColor;
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/);
        if (!m) continue;
        const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
        if (alpha < 0.05) continue; // skip transparent
        const r = parseInt(m[1]), g = parseInt(m[2]), b = parseInt(m[3]);
        return (r * 299 + g * 587 + b * 114) / 1000;
      }
      return 0; // dark fallback
    };

    const update = () => {
      if (menuOpen) return;
      // Force white navbar on pages where the hero overlay is too transparent for auto-detection.
      // pathname è /it, /en, /it/benessere, /en/benessere: confronto sull'ultimo segmento.
      const lastSegment = pathname.replace(/^\/(it|en)\/?/, "");
      const forcedWhitePages = ["", "benessere"];
      if (forcedWhitePages.includes(lastSegment) && window.scrollY < window.innerHeight * 0.85) {
        setIsDark(false);
        return;
      }
      const brightness = getBgBrightness();
      setIsDark(brightness > 160);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [menuOpen, pathname]);

  const darkMode = isDark && !menuOpen;

  return (
    <>
      <nav className={`navbar${menuOpen ? " menu-open" : ""}${darkMode ? " navbar--dark" : ""}`}>
        <div className={`navbar__logo${menuOpen ? " navbar__logo--hidden" : ""}`}>
          <Link href={`/${locale}`}>
            <Image
              src={darkMode ? "/assets/Logo-Marrone.svg" : "/assets/Logo-Bianco.svg"}
              alt="EQB Milano"
              width={80}
              height={40}
              priority
            />
          </Link>
        </div>

        <div className="navbar__right">
          <div className={`navbar__join${menuOpen ? " navbar__join--hidden" : ""}`}>
            <button
              className="navbar__join-btn"
              onClick={() => setJoinOpen((prev) => !prev)}
              aria-expanded={joinOpen}
              aria-haspopup="true"
            >
              {t("unisciti")}
            </button>
            {joinOpen && (
              <div className="navbar__join-pop">
                <Link href={`/${locale}/candidatura`} className="navbar__join-item" onClick={() => setJoinOpen(false)}>
                  <span className="navbar__join-kicker">{t("profSei")}</span>
                  <span className="navbar__join-label">{t("profLabel")} &#8594;</span>
                  <span className="navbar__join-desc">{t("profDesc")}</span>
                </Link>
                <Link href={`/${locale}/contatti`} className="navbar__join-item" onClick={() => setJoinOpen(false)}>
                  <span className="navbar__join-kicker">{t("clienteSei")}</span>
                  <span className="navbar__join-label">{t("clienteLabel")} &#8594;</span>
                  <span className="navbar__join-desc">{t("clienteDesc")}</span>
                </Link>
                <Link href={`/${locale}/aziende`} className="navbar__join-item" onClick={() => setJoinOpen(false)}>
                  <span className="navbar__join-kicker">{t("aziendaSei")}</span>
                  <span className="navbar__join-label">{t("aziendaLabel")} &#8594;</span>
                  <span className="navbar__join-desc">{t("aziendaDesc")}</span>
                </Link>
              </div>
            )}
          </div>
          <button
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </nav>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
