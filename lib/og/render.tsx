import { readFileSync } from "fs";
import { join } from "path";
import { ORG } from "@/lib/site";

/**
 * Font TTF locali (satori/next-og non supporta woff2 e non deve dipendere da una fetch
 * di rete a runtime sul VPS). Scaricati una volta da Google Fonts, vedi lib/og/fonts/.
 */
const manropeExtraBold = readFileSync(join(process.cwd(), "lib/og/fonts/Manrope-ExtraBold.ttf"));
const manropeBold = readFileSync(join(process.cwd(), "lib/og/fonts/Manrope-Bold.ttf"));
const poppinsSemiBold = readFileSync(join(process.cwd(), "lib/og/fonts/Poppins-SemiBold.ttf"));

export const ogFonts = [
  { name: "Manrope", data: manropeExtraBold, weight: 800 as const, style: "normal" as const },
  { name: "Manrope", data: manropeBold, weight: 700 as const, style: "normal" as const },
  { name: "Poppins", data: poppinsSemiBold, weight: 600 as const, style: "normal" as const },
];

const logoSvg = readFileSync(join(process.cwd(), "public/assets/Logo-Bianco.svg"), "utf-8");
const LOGO_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

export const OG_SIZE = { width: 1200, height: 630 };

const BG = "linear-gradient(135deg, #302624 0%, #4B3531 65%, #5c443e 100%)";
const CREAM = "#F8F7F4";
const MUTED = "#c9beb7";

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "64px 72px",
        background: BG,
        fontFamily: "Poppins",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_DATA_URI} width={140} height={56} alt="" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: MUTED,
            fontSize: 22,
          }}
        >
          <PinIcon />
          <span>Milano</span>
        </div>
      </div>

      <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "center" }}>
        {children}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 18,
          color: MUTED,
          fontSize: 20,
        }}
      >
        <span>{ORG.telephone}</span>
        <span style={{ display: "flex", color: "#7d6d66" }}>·</span>
        <span>{ORG.address.streetAddress}, {ORG.address.addressLocality}</span>
      </div>
    </div>
  );
}

export function OgCard({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Chrome>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
        <span
          style={{
            display: "flex",
            textTransform: "uppercase",
            letterSpacing: 4,
            fontSize: 22,
            fontFamily: "Poppins",
            color: "#e0a15c",
          }}
        >
          {eyebrow}
        </span>
        <span
          style={{
            display: "flex",
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: 68,
            lineHeight: 1.1,
            color: CREAM,
          }}
        >
          {title}
        </span>
        <span
          style={{
            display: "flex",
            fontFamily: "Poppins",
            fontSize: 26,
            lineHeight: 1.5,
            color: MUTED,
          }}
        >
          {subtitle}
        </span>
      </div>
    </Chrome>
  );
}

export function OgPersonCard({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <Chrome>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 44 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 180,
            height: 180,
            borderRadius: 90,
            background: "rgba(248,247,244,0.12)",
            border: "2px solid rgba(248,247,244,0.35)",
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: 72,
            color: CREAM,
          }}
        >
          {initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
          <span
            style={{
              display: "flex",
              textTransform: "uppercase",
              letterSpacing: 4,
              fontSize: 20,
              color: "#e0a15c",
            }}
          >
            Presso EQB Wellness Coworking
          </span>
          <span
            style={{
              display: "flex",
              fontFamily: "Manrope",
              fontWeight: 800,
              fontSize: 60,
              lineHeight: 1.1,
              color: CREAM,
            }}
          >
            {name}
          </span>
          <span
            style={{
              display: "flex",
              fontFamily: "Poppins",
              fontSize: 28,
              color: MUTED,
            }}
          >
            {role}
          </span>
        </div>
      </div>
    </Chrome>
  );
}
