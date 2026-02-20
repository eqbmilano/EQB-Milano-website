"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CTAButton } from "./CTAButton";
import { MenuOverlay } from "./MenuOverlay";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link href="/">
              <span className="text-white font-bold text-xl">EQB</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="navbar-right">
            <CTAButton variant="light" className="navbar-cta">
              JOIN US
            </CTAButton>

            {/* Hamburger Menu */}
            <button
              className={`navbar-hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
