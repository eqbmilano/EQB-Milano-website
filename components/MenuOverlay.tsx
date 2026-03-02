"use client";
import React from "react";
import Image from "next/image";
import "./MenuOverlay.css";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "#" },
  { label: "Spazio", href: "#spazio" },
  { label: "Benessere", href: "#benessere" },
  { label: "Visione", href: "#visione" },
  { label: "Contatti", href: "#contatti" },
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`menu-overlay${isOpen ? " menu-overlay--open" : ""}`}>
      {/* Background Image ottimizzata con Next.js */}
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
        {/* Colonna sinistra */}
        <div className="menu-overlay__left">
          <div className="menu-overlay__logo">
            <Image
              src="/assets/Logo-Bianco.svg"
              alt="EQB Milano"
              width={80}
              height={40}
            />
          </div>

          <div className="menu-overlay__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-overlay__social-icon"
              aria-label="LinkedIn"
            >
              <Image src="/assets/Icona-LinkedIn.svg" alt="LinkedIn" width={20} height={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-overlay__social-icon"
              aria-label="Instagram"
            >
              <Image src="/assets/Icona-Instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a
              href="https://wa.me/393755153273"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-overlay__social-icon"
              aria-label="WhatsApp"
            >
              <Image src="/assets/Icona-Whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </a>
          </div>

          <div className="menu-overlay__contacts">
            <p>+39 375 515 3273</p>
            <p>info@eqbmilano.it</p>
            <p>Milano, Italia</p>
          </div>
        </div>

        {/* Colonna destra — voci menu */}
        <nav className="menu-overlay__right">
          <ul className="menu-overlay__nav-list">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                className="menu-overlay__nav-item"
                style={{ animationDelay: `${0.25 + i * 0.08}s` }}
              >
                <a href={item.href} onClick={onClose}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
