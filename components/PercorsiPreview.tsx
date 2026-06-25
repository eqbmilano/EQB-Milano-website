"use client";
import React from "react";
import Link from "next/link";
import "./PercorsiPreview.css";

const PRO = { kicker: "Sono un professionista", text: "Cerco uno spazio dove lavorare, crescere e costruire relazioni.", cta: "Scopri il coworking", href: "/coworking", img: "/assets/Spazi-corridoio.jpg" };
const CLI = { kicker: "Cerco un professionista", text: "Voglio trovare il percorso o l’attività più adatta alle mie esigenze.", cta: "Scopri il benessere", href: "/benessere", img: "/assets/Federico-trattamento.jpg" };

const Arrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

/* A — Card affiancate (variante attualmente live) */
function VarA() {
  return (
    <div className="pp pp-a">
      <h2 className="pp-a__heading">A chi è dedicato EQB?</h2>
      <div className="pp-a__cards">
        {[PRO, CLI].map((p) => (
          <Link key={p.href} href={p.href} className="pp-a__card">
            <span className="pp-a__kicker">{p.kicker}</span>
            <p className="pp-a__text">{p.text}</p>
            <span className="pp-a__cta">{p.cta} <Arrow /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* B — Fascia divisa a metà (split band, niente card) */
function VarB() {
  return (
    <div className="pp pp-b">
      {[PRO, CLI].map((p) => (
        <Link key={p.href} href={p.href} className="pp-b__half">
          <span className="pp-b__kicker">{p.kicker}</span>
          <p className="pp-b__text">{p.text}</p>
          <span className="pp-b__cta">{p.cta} <Arrow /></span>
        </Link>
      ))}
    </div>
  );
}

/* C — Dichiarativa + due link (compatta, editoriale) */
function VarC() {
  return (
    <div className="pp pp-c">
      <p className="pp-c__statement">
        I professionisti trovano lo spazio per crescere.<br />Le persone, il professionista giusto.
      </p>
      <div className="pp-c__links">
        <Link href="/coworking" className="pp-c__link"><b>Sei un professionista?</b> Scopri il coworking <Arrow /></Link>
        <Link href="/benessere" className="pp-c__link"><b>Cerchi un professionista?</b> Scopri il benessere <Arrow /></Link>
      </div>
    </div>
  );
}

/* D — Due card con foto */
function VarD() {
  return (
    <div className="pp pp-d">
      {[PRO, CLI].map((p) => (
        <Link key={p.href} href={p.href} className="pp-d__card" style={{ backgroundImage: `url('${p.img}')` }}>
          <span className="pp-d__overlay" />
          <span className="pp-d__body">
            <span className="pp-d__kicker">{p.kicker}</span>
            <p className="pp-d__text">{p.text}</p>
            <span className="pp-d__cta">{p.cta} <Arrow /></span>
          </span>
        </Link>
      ))}
    </div>
  );
}

const VARS = [
  { n: "A", label: "Card affiancate (variante attualmente live)", C: VarA },
  { n: "B", label: "Fascia divisa a metà — minimal, niente card", C: VarB },
  { n: "C", label: "Dichiarativa + due link — compatta, editoriale", C: VarC },
  { n: "D", label: "Due card con foto — più visiva e immersiva", C: VarD },
];

export const PercorsiPreview: React.FC = () => (
  <div className="pp-page">
    <header className="pp-page__top">
      <span className="pp-page__kicker">Preview — non è la home vera</span>
      <h1 className="pp-page__h1">Sezione “A chi è dedicato EQB?”</h1>
      <p className="pp-page__sub">4 modi di fare la biforcazione professionista / cliente, da inserire tra l’hero e il manifesto.</p>
    </header>
    {VARS.map(({ n, label, C }) => (
      <section key={n} className="pp-slot">
        <div className="pp-slot__tag"><b>Variante {n}</b> · {label}</div>
        <C />
      </section>
    ))}
  </div>
);
