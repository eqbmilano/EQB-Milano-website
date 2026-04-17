import React from "react";
import Image from "next/image";
import "./Footer.css";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Spazio", href: "#spazio" },
  { label: "Benessere", href: "#benessere" },
  { label: "Visione", href: "#visione" },
  { label: "Contatti", href: "#contatti" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Col 1: Logo + tagline */}
        <div className="footer__col footer__col--brand">
          <Image
            src="/assets/Logo-Bianco.svg"
            alt="EQB Milano"
            width={70}
            height={35}
          />
          <p className="footer__tagline">
            Wellness &amp; Fitness Coworking<br />Milano
          </p>
        </div>

        {/* Col 2: Navigazione */}
        <div className="footer__col">
          <span className="footer__col-label">Navigazione</span>
          <ul className="footer__nav">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contatti + social */}
        <div className="footer__col">
          <span className="footer__col-label">Contatti</span>
          <div className="footer__contacts">
            <p>
              <a href="tel:+393755153273">
                +39 375 515 3273
                <svg className="footer-contact-arrow" width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </p>
            <p>
              <a href="mailto:info@eqbmilano.it">
                info@eqbmilano.it
                <svg className="footer-contact-arrow" width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </p>
            <p>
              <a href="https://share.google/bu1nHJ6pAM3LBYwkU" target="_blank" rel="noopener noreferrer">
                Viale Regina Margherita 43, 20122, Milano
                <svg className="footer-contact-arrow" width="10" height="10" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </p>
          </div>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/company/eqbmilano"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="LinkedIn"
            >
              <Image src="/assets/Icona-LinkedIn.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a
              href="https://www.instagram.com/eqbmilano/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="Instagram"
            >
              <Image src="/assets/Icona-Instagram.svg" alt="Instagram" width={40} height={40} />
            </a>
            <a
              href="https://wa.me/message/ZDLNL4HKLOF6H1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="WhatsApp"
            >
              <Image src="/assets/Icona-Whatsapp.svg" alt="WhatsApp" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 EQB Milano · Tutti i diritti riservati</p>
      </div>
    </footer>
  );
};
