"use client";

import React from "react";
import "./MenuOverlay.css";

interface MenuOverlayProps {
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Spazio", href: "#spazio" },
  { label: "Coworking", href: "#coworking" },
  { label: "Benessere", href: "#benessere" },
  { label: "Visione", href: "#visione" },
  { label: "Contatti", href: "#contatti" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="menu-overlay">
      <div className="menu-container">
        {/* Left Section */}
        <div className="menu-left">
          <div className="menu-logo">EQB</div>

          {/* Contact Info */}
          <div className="menu-contact">
            <div className="contact-item">
              <p className="contact-label">Telefono</p>
              <a href="tel:+39">+39 (0) 2 ______</a>
            </div>
            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a href="mailto:info@eqbmilano.it">info@eqbmilano.it</a>
            </div>
            <div className="contact-item">
              <p className="contact-label">Indirizzo</p>
              <p>Piazza Cinque Giornate<br />Milano, Italia</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="menu-social">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="social-circle">
                {link.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Navigation */}
        <div className="menu-right">
          <nav className="menu-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="menu-item"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Decorative Arc */}
          <div className="menu-arc"></div>
        </div>
      </div>
    </div>
  );
};
