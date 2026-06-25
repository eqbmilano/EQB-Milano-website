"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./MenuPreview.css";

type Item = { l: string; h: string; p?: boolean };
const GROUPS: { label: string; items: Item[] }[] = [
  { label: "Per i professionisti", items: [{ l: "Coworking", h: "/coworking", p: true }, { l: "Spazio", h: "/spazio" }, { l: "Visione", h: "/visione" }] },
  { label: "Per te", items: [{ l: "Benessere", h: "/benessere", p: true }] },
  { label: "Info", items: [{ l: "Contatti", h: "/contatti" }] },
];

const Logo = () => (
  <div className="mp-logo"><Image src="/assets/Logo-Bianco.svg" alt="EQB Milano" width={74} height={37} /></div>
);

function NavLink({ it, cls = "mp-link" }: { it: Item; cls?: string }) {
  return <Link href={it.h} className={`${cls}${it.p ? " is-primary" : ""}`}>{it.l}</Link>;
}

/* A — Gruppi impilati, etichette piccole */
function VarA() {
  return (
    <div className="mp mp-a">
      {GROUPS.map((g) => (
        <div className="mp-a__group" key={g.label}>
          <span className="mp-label">{g.label}</span>
          <ul className="mp-list">{g.items.map((it) => <li key={it.l}><NavLink it={it} /></li>)}</ul>
        </div>
      ))}
    </div>
  );
}

/* B — Due colonne (professionisti | te + info) */
function VarB() {
  return (
    <div className="mp mp-b">
      <div className="mp-b__col">
        <span className="mp-label">{GROUPS[0].label}</span>
        <ul className="mp-list">{GROUPS[0].items.map((it) => <li key={it.l}><NavLink it={it} /></li>)}</ul>
      </div>
      <div className="mp-b__col">
        {GROUPS.slice(1).map((g) => (
          <div className="mp-b__sub" key={g.label}>
            <span className="mp-label">{g.label}</span>
            <ul className="mp-list">{g.items.map((it) => <li key={it.l}><NavLink it={it} /></li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* C — Gerarchia: i due mondi grandi + il resto piccolo */
function VarC() {
  return (
    <div className="mp mp-c">
      <div className="mp-c__main">
        <Link href="/coworking" className="mp-c__big">Coworking<span>Per i professionisti</span></Link>
        <Link href="/benessere" className="mp-c__big">Benessere<span>Per te</span></Link>
      </div>
      <div className="mp-c__rest">
        <Link href="/spazio">Spazio</Link>
        <Link href="/visione">Visione</Link>
        <Link href="/contatti">Contatti</Link>
      </div>
    </div>
  );
}

/* D — Etichette laterali, editoriale */
function VarD() {
  return (
    <div className="mp mp-d">
      {GROUPS.map((g) => (
        <div className="mp-d__row" key={g.label}>
          <span className="mp-d__label">{g.label}</span>
          <ul className="mp-d__links">{g.items.map((it) => <li key={it.l}><NavLink it={it} /></li>)}</ul>
        </div>
      ))}
    </div>
  );
}

const VARS = [
  { n: "A", label: "Gruppi impilati, etichette piccole", C: VarA },
  { n: "B", label: "Due colonne (professionisti | te + info)", C: VarB },
  { n: "C", label: "Gerarchia: i due mondi grandi + il resto piccolo", C: VarC },
  { n: "D", label: "Etichette laterali, editoriale", C: VarD },
];

export const MenuPreview: React.FC = () => (
  <div className="mp-page">
    <header className="mp-page__top">
      <span className="mp-page__kicker">Preview — menu raggruppato per pubblico</span>
      <p className="mp-page__sub">4 modi di organizzare il menu hamburger. La Home resta accessibile dal logo. Scorri per confrontarli.</p>
    </header>
    {VARS.map(({ n, label, C }) => (
      <section key={n} className="mp-slot">
        <div className="mp-slot__tag"><b>Variante {n}</b> · {label}</div>
        <div className="mp-stage">
          <Logo />
          <C />
        </div>
      </section>
    ))}
  </div>
);
