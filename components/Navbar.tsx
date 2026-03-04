"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { MenuOverlay } from "./MenuOverlay";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsDark(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkMode = isDark && !menuOpen;

  return (
    <>
      <nav className={`navbar${menuOpen ? " menu-open" : ""}${darkMode ? " navbar--dark" : ""}`}>
        <div className={`navbar__logo${menuOpen ? " navbar__logo--hidden" : ""}`}>
          <Image
            src="/assets/Logo-Bianco.svg"
            alt="EQB Milano"
            width={80}
            height={40}
            priority
          />
        </div>

        <div className="navbar__right">
          <div className={`navbar__cta-desktop${menuOpen ? " navbar__cta-desktop--hidden" : ""}`}>
            <CTAButton href="#contatti" variant={darkMode ? "dark" : "light"}>
              Join Us
            </CTAButton>
          </div>

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
