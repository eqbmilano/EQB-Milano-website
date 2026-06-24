"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOverlay } from "./MenuOverlay";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
      // Force white navbar on pages where the hero overlay is too transparent for auto-detection
      const forcedWhitePages = ["/", "/benessere", "/benessere-v2"];
      if (forcedWhitePages.includes(pathname) && window.scrollY < window.innerHeight * 0.85) {
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
          <Link href="/">
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
          {pathname !== "/benessere" && (
            <div className={`navbar__cliente${menuOpen ? " navbar__cliente--hidden" : ""}`}>
              <span className="navbar__cliente-q">
                Cerchi benessere?
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <Link href="/benessere" className="navbar__cliente-pill">
                Scopri i nostri servizi
              </Link>
            </div>
          )}

          <button
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
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
