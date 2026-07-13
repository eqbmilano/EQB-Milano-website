"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialIcons";
import "./Footer.css";

const ALL_PAGES = [
  { label: "Home",      href: "/" },
  { label: "Spazio",    href: "/spazio" },
  { label: "Coworking", href: "/coworking" },
  { label: "Benessere", href: "/benessere" },
  { label: "Visione",   href: "/visione" },
  { label: "Contatti",  href: "/contatti" },
];

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const navItems = ALL_PAGES.filter((p) => p.href !== pathname);

  return (
    <footer className={`footer${pathname === "/" ? " footer--dark" : ""}`}>
      <div className="footer__grid">
        <Reveal className="footer__col footer__col--brand" delay={0}>
          <Link href="/">
            <Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={70} height={35} />
          </Link>
          <p className="footer__tagline">
            Wellness &amp; Fitness Coworking<br />Milano
          </p>
        </Reveal>

        <Reveal className="footer__col" delay={80}>
          <span className="footer__col-label">Navigazione</span>
          <ul className="footer__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="footer__col" delay={160}>
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
            <SocialLinks variant="light" size={20} direction="row" />
          </div>
        </Reveal>
      </div>

      <div className="footer__bottom">
        <p className="footer__legal">
          EQB Milano di Adinolfi Marco · Impresa individuale · P.IVA 14601140966 · C.F. DNLMRC02A11F205W · REA MI-2794459 (CCIAA Milano MB Lodi) · Sede operativa: Viale Regina Margherita 43, 20122 Milano
        </p>
        <p>
          © 2026 EQB Milano · Tutti i diritti riservati ·{" "}
          <Link href="/privacy" className="footer__privacy-link">Privacy</Link>
        </p>
      </div>
    </footer>
  );
};
