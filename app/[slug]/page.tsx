import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { professionisti } from "./data";
import "./linktree.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = professionisti.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.nome} ${p.cognome} — EQB Milano`,
    description: p.bio,
    openGraph: {
      title: `${p.nome} ${p.cognome} — EQB Milano`,
      description: p.bio,
      url: `https://eqbmilano.it/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return professionisti.map((p) => ({ slug: p.slug }));
}

export default async function LinktreePage({ params }: Props) {
  const { slug } = await params;
  const p = professionisti.find((x) => x.slug === slug);
  if (!p) notFound();

  const initials = `${p.nome[0]}${p.cognome[0]}`;
  const r = (canale: string) => `/r/${p.slug}/${canale}`;

  return (
    <main className="lt">
      <a
        href="https://eqbmilano.it"
        aria-label="EQB Milano"
        className="lt-logo lt-in lt-in--1"
      >
        <span className="lt-logo__chip">
          <Image
            src="/assets/Logo-Bianco.svg"
            alt="EQB Milano"
            width={64}
            height={32}
          />
        </span>
      </a>

      <div className="lt-card">
        <div className="lt-head lt-in lt-in--2">
          <div className="lt-avatar">
            {p.foto ? (
              <div className="lt-avatar__img">
                <Image
                  src={p.foto}
                  fill
                  alt={`${p.nome} ${p.cognome}`}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="lt-avatar__initials">{initials}</div>
            )}
          </div>

          <h1 className="lt-name">
            {p.nome} {p.cognome}
          </h1>
          <p className="lt-spec">{p.specializzazione}</p>
          <span className="lt-badge">
            <span className="lt-badge__dot">✦</span>
            Presso EQB Wellness Coworking · Milano
          </span>
        </div>

        <p className="lt-bio lt-in lt-in--3">{p.bio}</p>

        {p.promo && (
          <a
            href={r("promo")}
            target="_blank"
            rel="noopener noreferrer"
            className="lt-promo lt-in lt-in--4"
          >
            <span className="lt-promo__row">
              <span className="lt-promo__star">✦</span>
              <span>
                <span className="lt-promo__kicker">Offerta speciale</span>
                <span className="lt-promo__label">{p.promo.label}</span>
                <span className="lt-promo__desc">{p.promo.descrizione}</span>
              </span>
            </span>
          </a>
        )}

        <div className="lt-links lt-in lt-in--5">
          <LinkRow
            href={r("prenota")}
            primary
            icon={p.prenotaCanale === "whatsapp" ? <IconChat /> : <IconCalendar />}
            label={
              p.prenotaCanale === "whatsapp"
                ? "Prenota su WhatsApp"
                : "Prenota una seduta"
            }
          />
          {p.sitoWeb && (
            <LinkRow href={r("sito")} icon={<IconGlobe />} label="Il mio sito web" />
          )}
          <LinkRow href={r("maps")} icon={<IconPin />} label="Dove trovarci" />
        </div>

        {(p.social.instagram || p.social.whatsapp || p.social.linkedin) && (
          <div className="lt-social lt-in lt-in--6">
            {p.social.instagram && (
              <SocialIcon
                href={r("instagram")}
                src="/assets/Icona-Instagram.svg"
                alt="Instagram"
              />
            )}
            {p.social.whatsapp && (
              <SocialIcon
                href={r("whatsapp")}
                src="/assets/Icona-Whatsapp.svg"
                alt="WhatsApp"
              />
            )}
            {p.social.linkedin && (
              <SocialIcon
                href={r("linkedin")}
                src="/assets/Icona-LinkedIn.svg"
                alt="LinkedIn"
              />
            )}
          </div>
        )}

        <div className="lt-footer lt-in lt-in--7">
          <span className="lt-footer__chip">
            <Image
              src="/assets/Logo-Bianco.svg"
              alt="EQB Milano"
              width={40}
              height={20}
            />
          </span>
          <span className="lt-footer__text">
            Wellness &amp; Fitness Coworking · Milano
          </span>
        </div>
      </div>
    </main>
  );
}

/* ─── Componenti interni ─── */

function LinkRow({
  href,
  icon,
  label,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`lt-btn${primary ? " lt-btn--primary" : ""}`}
    >
      <span className="lt-btn__icon">{icon}</span>
      <span>{label}</span>
      <span className="lt-btn__arrow">→</span>
    </a>
  );
}

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="lt-social__icon"
    >
      <Image src={src} alt={alt} width={20} height={20} />
    </a>
  );
}

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
