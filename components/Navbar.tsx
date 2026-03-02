"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { MenuOverlay } from "./MenuOverlay";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className={`navbar${menuOpen ? " menu-open" : ""}`}>
        <div className={`navbar__logo${menuOpen ? " navbar__logo--hidden" : ""}`}>
          <Image
            src="/assets/Logo-Bianco.svg"
            alt="EQB Milano"
            width={80}
            height={40}
            priority
          />
        </div>

        <div className={`navbar__right${menuOpen ? " navbar__right--hidden" : ""}`}>
          <div className="navbar__cta-desktop">
            <CTAButton href="#contatti" variant="light">
              JOIN US
            </CTAButton>
          </div>
        </div>

        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </nav>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
