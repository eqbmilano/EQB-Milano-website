"use client";
import React, { useRef, useEffect, useState } from "react";
import "./preview-pilastri.css";

/* Copy (bozza, da limare alla fine) */
const P1 = {
  eyebrow: "La visione",
  line1: "Non è un centro benessere.",
  accent: "È un ecosistema.",
  body: "Qui i professionisti non sono di passaggio: hanno scelto di restare, di crescere insieme, di prendersi cura delle persone allo stesso modo. Non un posto dove passi — un posto a cui torni.",
};
const P2 = {
  eyebrow: "La garanzia",
  line1: "Chiunque incontri, qui,",
  accent: "è stato scelto.",
  body: "Ognuno è qui perché è bravo davvero, e perché ci tiene sul serio. Così, chiunque tu incontri, sei in buone mani — senza doverci pensare.",
};

type Copy = typeof P1;

function useOnScreen<T extends HTMLElement>(margin = "-12%") {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          obs.disconnect();
        }
      },
      { rootMargin: `0px 0px ${margin} 0px`, threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);
  return { ref, on };
}

/* ── A — Blur→fuoco + linea che si disegna ── */
function PillarA({ eyebrow, line1, accent, body }: Copy) {
  const { ref, on } = useOnScreen<HTMLDivElement>();
  return (
    <div ref={ref} className={`va-pillar${on ? " is-on" : ""}`}>
      <span className="va-eyebrow rise rise--0">{eyebrow}</span>
      <h2 className="va-claim">
        <span className="va-line rise rise--1">{line1}</span>
        <span className="va-line va-accent rise rise--2">
          <span className="va-accent__txt">{accent}</span>
        </span>
      </h2>
      <p className="pil-body rise rise--3">{body}</p>
    </div>
  );
}
function ThreadA() {
  const { ref, on } = useOnScreen<HTMLDivElement>("-25%");
  return (
    <div ref={ref} className={`va-thread${on ? " is-on" : ""}`}>
      <span />
    </div>
  );
}

/* ── B — Mask wipe ── */
function PillarB({ eyebrow, line1, accent, body }: Copy) {
  const { ref, on } = useOnScreen<HTMLDivElement>();
  return (
    <div ref={ref} className={`vb-pillar${on ? " is-on" : ""}`}>
      <span className="vb-eyebrow">{eyebrow}</span>
      <h2 className="vb-claim">
        <span className="vb-mask">
          <span className="vb-in vb-in--1">{line1}</span>
        </span>
        <span className="vb-mask">
          <span className="vb-in vb-in--2 vb-accent">{accent}</span>
        </span>
      </h2>
      <p className="pil-body vb-body">{body}</p>
    </div>
  );
}

/* ── C — Evidenziatore: marker che sweepa sotto la frase-chiave ── */
function PillarC({ eyebrow, line1, accent, body }: Copy) {
  const { ref, on } = useOnScreen<HTMLDivElement>();
  return (
    <div ref={ref} className={`vc-pillar${on ? " is-on" : ""}`}>
      <span className="vc-eyebrow rise rise--0">{eyebrow}</span>
      <h2 className="vc-claim">
        <span className="vc-line rise rise--1">{line1}</span>
        <span className="vc-line vc-accent rise rise--2">
          <span className="vc-mark">{accent}</span>
        </span>
      </h2>
      <p className="pil-body rise rise--3">{body}</p>
    </div>
  );
}

/* ── D — Cascata parola per parola ── */
function PillarD({ eyebrow, line1, accent, body }: Copy) {
  const { ref, on } = useOnScreen<HTMLDivElement>();
  const w1 = line1.split(" ");
  const wa = accent.split(" ");
  let i = 0;
  const delay = () => (on ? `${0.1 + i++ * 0.05}s` : "0s");
  const total = w1.length + wa.length;
  return (
    <div ref={ref} className={`vd-pillar${on ? " is-on" : ""}`}>
      <span className="vd-eyebrow">{eyebrow}</span>
      <h2 className="vd-claim">
        <span className="vd-line">
          {w1.map((w, k) => (
            <span key={k} className="vd-word" style={{ transitionDelay: delay() }}>
              {w}
            </span>
          ))}
        </span>
        <span className="vd-line vd-accent">
          {wa.map((w, k) => (
            <span key={k} className="vd-word" style={{ transitionDelay: delay() }}>
              {w}
            </span>
          ))}
        </span>
      </h2>
      <p
        className="pil-body vd-body"
        style={{ transitionDelay: on ? `${0.1 + total * 0.05 + 0.15}s` : "0s" }}
      >
        {body}
      </p>
    </div>
  );
}

export default function PreviewPilastri() {
  return (
    <main className="pil-preview">
      <header className="pil-head">
        <h1>EQB · Sezione “I due pilastri”</h1>
        <p>Pelle del sito (crema, Manrope, accento marrone). 4 animazioni — scrolla piano.</p>
      </header>

      <p className="pil-cap">Variante A — Blur → fuoco + linea che si disegna</p>
      <section className="va">
        <PillarA {...P1} />
        <ThreadA />
        <PillarA {...P2} />
      </section>

      <p className="pil-cap">Variante B — Mask wipe (il titolo sale da dietro)</p>
      <section className="vb">
        <PillarB {...P1} />
        <PillarB {...P2} />
      </section>

      <p className="pil-cap">Variante C — Evidenziatore sulla frase-chiave</p>
      <section className="vc">
        <PillarC {...P1} />
        <PillarC {...P2} />
      </section>

      <p className="pil-cap">Variante D — Cascata parola per parola</p>
      <section className="vd">
        <PillarD {...P1} />
        <PillarD {...P2} />
      </section>

      <footer className="pil-foot">Fine varianti · /preview-pilastri</footer>
    </main>
  );
}
