import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { professionisti, EQB_MAPS } from "./data";
import { LinkButton } from "./link-button";

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

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F7F4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 60px",
        fontFamily: "var(--font-poppins), sans-serif",
      }}
    >
      {/* Logo EQB */}
      <a
        href="https://eqbmilano.it"
        aria-label="EQB Milano"
        style={{ marginBottom: "36px", display: "block" }}
      >
        <div
          style={{
            background: "#322523",
            borderRadius: "10px",
            padding: "8px 16px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/Logo-Bianco.svg"
            alt="EQB Milano"
            width={64}
            height={32}
          />
        </div>
      </a>

      {/* Card contenuto */}
      <div style={{ width: "100%", maxWidth: "400px" }}>

        {/* Avatar + nome */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {p.foto ? (
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #D4CFC9",
                marginBottom: 16,
                position: "relative",
              }}
            >
              <Image src={p.foto} fill alt={`${p.nome} ${p.cognome}`} style={{ objectFit: "cover" }} />
            </div>
          ) : (
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: "#322523",
                color: "#F8F7F4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 600,
                fontFamily: "var(--font-manrope), sans-serif",
                marginBottom: 16,
                letterSpacing: "0.05em",
              }}
            >
              {initials}
            </div>
          )}

          <h1
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: 24,
              fontWeight: 600,
              color: "#322523",
              margin: 0,
              textAlign: "center",
            }}
          >
            {p.nome} {p.cognome}
          </h1>
          <p
            style={{
              color: "#A09890",
              fontSize: 13,
              marginTop: 6,
              textAlign: "center",
              letterSpacing: "0.04em",
            }}
          >
            {p.specializzazione}
          </p>
        </div>

        {/* Bio */}
        <p
          style={{
            color: "#322523",
            fontSize: 14,
            lineHeight: 1.7,
            textAlign: "center",
            marginBottom: 28,
            opacity: 0.8,
          }}
        >
          {p.bio}
        </p>

        {/* Banner promo */}
        {p.promo && (
          <a
            href={p.promo.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "#322523",
              borderRadius: 16,
              padding: "16px 20px",
              marginBottom: 16,
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ fontSize: 24, lineHeight: 1 }}>✦</span>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.55)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Offerta speciale
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    color: "#fff",
                    marginBottom: 4,
                  }}
                >
                  {p.promo.label}
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 13,
                  }}
                >
                  {p.promo.descrizione}
                </span>
              </div>
            </div>
          </a>
        )}

        {/* Bottoni */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <LinkButton
            href={p.prenotaLink}
            icon={<IconCalendar />}
            label="Prenota una seduta"
          />
          {p.sitoWeb && (
            <LinkButton
              href={p.sitoWeb}
              icon={<IconGlobe />}
              label="Il mio sito web"
            />
          )}
          <LinkButton
            href={EQB_MAPS}
            icon={<IconPin />}
            label="Dove trovarci"
          />
        </div>

        {/* Social */}
        {(p.social.instagram || p.social.whatsapp || p.social.linkedin) && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 32,
            }}
          >
            {p.social.instagram && (
              <SocialIcon
                href={p.social.instagram}
                src="/assets/Icona-Instagram.svg"
                alt="Instagram"
              />
            )}
            {p.social.whatsapp && (
              <SocialIcon
                href={p.social.whatsapp}
                src="/assets/Icona-Whatsapp.svg"
                alt="WhatsApp"
              />
            )}
            {p.social.linkedin && (
              <SocialIcon
                href={p.social.linkedin}
                src="/assets/Icona-LinkedIn.svg"
                alt="LinkedIn"
              />
            )}
          </div>
        )}

        {/* Footer */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid #D4CFC9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              background: "#322523",
              borderRadius: 6,
              padding: "4px 10px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/assets/Logo-Bianco.svg"
              alt="EQB Milano"
              width={40}
              height={20}
            />
          </div>
          <span style={{ color: "#A09890", fontSize: 12 }}>
            Wellness &amp; Fitness Coworking · Milano
          </span>
        </div>
      </div>
    </main>
  );
}

/* ─── Componenti interni ─── */

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
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "#322523",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
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
