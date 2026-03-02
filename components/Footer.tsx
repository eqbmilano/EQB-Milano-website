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
            <p>+39 375 515 3273</p>
            <p>info@eqbmilano.it</p>
            <p>Milano, Italia</p>
          </div>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="LinkedIn"
            >
              <Image src="/assets/Icona-LinkedIn.svg" alt="LinkedIn" width={18} height={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="Instagram"
            >
              <Image src="/assets/Icona-Instagram.svg" alt="Instagram" width={18} height={18} />
            </a>
            <a
              href="https://wa.me/393755153273"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-icon"
              aria-label="WhatsApp"
            >
              <Image src="/assets/Icona-Whatsapp.svg" alt="WhatsApp" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 EQB Milano · Tutti i diritti riservati</p>
      </div>
    </footer>
  );
};
