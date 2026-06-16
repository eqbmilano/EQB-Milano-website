"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./preview-cards.css";

const WA = "https://wa.me/393755153273?text=";

const groups = [
  {
    label: "Trattamenti",
    services: [
      { name: "Osteopatia",            img: "/assets/Osteopatia.jpg",              desc: "Valutazione e trattamento globale del sistema muscolo-scheletrico per ritrovare equilibrio e benessere.",    msg: "Ciao! Vorrei info sull'osteopatia" },
      { name: "Fisioterapia",          img: "/assets/Federico-lavoro-2.jpg",       desc: "Riabilitazione funzionale post-traumatica, pre e post operatoria, con approccio personalizzato.",           msg: "Ciao! Vorrei info sulla fisioterapia" },
      { name: "Massoterapia",          img: "/assets/Massaggio-decontratturante.jpg", desc: "Massaggio terapeutico per sciogliere tensioni muscolari, contratture e rigidità croniche.",               msg: "Ciao! Vorrei info sulla massoterapia" },
      { name: "Osteopatia Pediatrica", img: "/assets/Osteopatia-cranio.jpg",       desc: "Approccio dolce e specifico per neonati e bambini, per favorire uno sviluppo armonioso.",                    msg: "Ciao! Vorrei info sull'osteopatia pediatrica" },
    ],
  },
  {
    label: "Movimento",
    services: [
      { name: "Pilates",    img: "/assets/Pilates.jpg",          desc: "Metodo Reformer per forza, equilibrio e consapevolezza corporea profonda, con istruttori certificati.",           msg: "Ciao! Vorrei info sul Pilates" },
      { name: "Yoga",       img: "/assets/02_Pilates_e_Yoga.jpeg", desc: "Pratica integrata mente-corpo: respiro, postura e fluidità per tornare a sentirsi centrati.",                  msg: "Ciao! Vorrei info sullo Yoga" },
      { name: "Posturale",  img: "/assets/Federico-lavoro-1.jpg", desc: "Rieducazione posturale globale con esercizi mirati per correggere compensi e prevenire dolori ricorrenti.",     msg: "Ciao! Vorrei info sul percorso posturale" },
      { name: "Funzionale", img: "/assets/Sala-Allenamento.jpg",  desc: "Allenamento adattivo per forza, mobilità e performance. Ogni programma costruito intorno a te.",                msg: "Ciao! Vorrei info sull'allenamento funzionale" },
    ],
  },
  {
    label: "Relax",
    services: [
      { name: "Linfodrenante",          img: "/assets/Massaggi-7.jpg",    desc: "Drenaggio linfatico manuale per ridurre ritenzione idrica, gonfiore e senso di pesantezza.",                  msg: "Ciao! Vorrei info sul linfodrenante" },
      { name: "Riflessologia Plantare", img: "/assets/Riflessologia.jpg", desc: "Stimolazione dei punti riflessi del piede per riequilibrare l'organismo e favorire il rilassamento profondo.", msg: "Ciao! Vorrei info sulla riflessologia plantare" },
      { name: "Coppettazione",          img: "/assets/Conchiglie.jpg",    desc: "Tecnica di ventosaterapia per sciogliere aderenze, migliorare la circolazione e allentare le tensioni.",      msg: "Ciao! Vorrei info sulla coppettazione" },
      { name: "Massaggi Rilassanti",    img: "/assets/Bambu-1.jpg",       desc: "Massaggi personalizzati con bambù, conchiglie, pennelli e oli essenziali per un recupero sensoriale completo.", msg: "Ciao! Vorrei prenotare un massaggio rilassante" },
    ],
  },
  {
    label: "Consulenza",
    services: [
      { name: "Nutrizione",   img: "/assets/Nutrizionista.jpg",         desc: "Analisi della composizione corporea e piano nutrizionale su misura, per obiettivi reali e duraturi.",     msg: "Ciao! Vorrei prenotare una consulenza nutrizionale" },
      { name: "Mental Coach", img: "/assets/Noemi.jpg",                 desc: "Percorsi di crescita personale per sbloccare potenziale, chiarire obiettivi e costruire abitudini sane.",  msg: "Ciao! Vorrei info sul mental coaching" },
      { name: "Counselor",    img: "/assets/Roberta-Boara.jpg",         desc: "Supporto psicologico in un ambiente riservato e accogliente, per affrontare momenti di difficoltà o transizione.", msg: "Ciao! Vorrei info sul counseling" },
    ],
  },
];

const allServices = groups.flatMap((g) =>
  g.services.map((s) => ({ ...s, cat: g.label }))
);

function HoverCard({ name, img, desc, cat, msg }: {
  name: string; img: string; desc: string; cat: string; msg: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`hc-wrapper${flipped ? " is-flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Front */}
      <div className="hc-front">
        <div className="hc-front__img">
          <Image src={img} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hc-front__overlay" />
        <span className="hc-front__cat">{cat}</span>
        <div className="hc-front__body">
          <span className="hc-front__name">{name}</span>
          <span className="hc-front__btn">Prenota →</span>
        </div>
      </div>

      {/* Back */}
      <div className="hc-back">
        <span className="hc-back__cat">{cat}</span>
        <span className="hc-back__name">{name}</span>
        <p className="hc-back__desc">{desc}</p>
        <a
          href={`${WA}${encodeURIComponent(msg)}`}
          target="_blank" rel="noopener noreferrer"
          className="hc-back__btn"
          onClick={(e) => e.stopPropagation()}
        >
          Prenota su WhatsApp
        </a>
      </div>
    </div>
  );
}

function StackedCard({ name, img, desc, msg, cat }: {
  name: string; img: string; desc: string; msg: string; cat: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`hc-wrapper${flipped ? " is-flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="hc-front">
        <div className="hc-front__img">
          <Image src={img} alt={name} fill sizes="25vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hc-front__overlay" />
        <span className="hc-front__cat">{cat}</span>
        <div className="hc-front__body">
          <span className="hc-front__name">{name}</span>
          <span className="hc-front__btn">Prenota →</span>
        </div>
      </div>
      <div className="hc-back">
        <span className="hc-back__cat">{cat}</span>
        <span className="hc-back__name">{name}</span>
        <p className="hc-back__desc">{desc}</p>
        <a
          href={`${WA}${encodeURIComponent(msg)}`}
          target="_blank" rel="noopener noreferrer"
          className="hc-back__btn"
          onClick={(e) => e.stopPropagation()}
        >
          Prenota su WhatsApp
        </a>
      </div>
    </div>
  );
}

function RowCard({ name, img, desc, cat, msg }: {
  name: string; img: string; desc: string; cat: string; msg: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`vc-row${open ? " is-open" : ""}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="vc-row__photo">
        <Image src={img} alt={name} fill sizes="220px" style={{ objectFit: "cover" }} />
      </div>
      <div className="vc-row__content">
        <div className="vc-row__text">
          <span className="vc-row__name">{name}</span>
          <span className="vc-row__desc">{desc}</span>
        </div>
        <div className="vc-row__right">
          <a
            href={`${WA}${encodeURIComponent(msg)}`}
            target="_blank" rel="noopener noreferrer"
            className="vc-row__btn"
            onClick={(e) => e.stopPropagation()}
          >
            Prenota →
          </a>
          <span className="vc-row__arrow">→</span>
        </div>
      </div>
    </div>
  );
}

export default function PreviewCardsPage() {
  return (
    <div className="pc-page">

      <nav className="pc-nav">
        <span className="pc-nav__label">Versioni</span>
        <a href="#va">A — Griglia piatta</a>
        <a href="#vb">B — Per categoria</a>
        <a href="#vc">C — Righe verticali</a>
        <a href="#vd">D — 4 colonne impilate</a>
      </nav>

      {/* ════════════════════════════
          VERSION A — FLAT GRID
      ════════════════════════════ */}
      <section className="pc-section" id="va">
        <span className="pc-section__label">A — Griglia piatta</span>
        <p className="pc-section__desc">
          Tutti i 15 servizi in griglia 3 colonne. Categoria come pill trasparente in alto a sinistra su ogni card. Hover rivela descrizione + CTA. Click su mobile.
        </p>
        <div className="pc-header">
          <span className="pc-sup">Tutto quello che trovi da EQB</span>
          <h2 className="pc-title">La nostra offerta</h2>
        </div>
        <div className="va-grid">
          {allServices.map((s) => (
            <HoverCard key={s.name} {...s} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          VERSION B — PER CATEGORIA
      ════════════════════════════ */}
      <section className="pc-section" id="vb">
        <span className="pc-section__label">B — Per categoria</span>
        <p className="pc-section__desc">
          Ogni categoria ha il suo titolo + riga di card. 4 colonne per Trattamenti, Movimento e Relax; 3 per Consulenza. La struttura rimane leggibile.
        </p>
        <div className="pc-header">
          <span className="pc-sup">Tutto quello che trovi da EQB</span>
          <h2 className="pc-title">La nostra offerta</h2>
        </div>
        <div className="vb-groups">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="vb-group__header">
                <h3 className="vb-group__title">{g.label}</h3>
                <span className="vb-group__count">{g.services.length} servizi</span>
              </div>
              <div className="vb-group__cards">
                {g.services.map((s) => (
                  <HoverCard key={s.name} {...s} cat={g.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          VERSION C — RIGHE VERTICALI
      ════════════════════════════ */}
      <section className="pc-section" id="vc">
        <span className="pc-section__label">C — Righe verticali</span>
        <p className="pc-section__desc">
          Card orizzontali impilate per categoria. Foto a sinistra, nome a destra. Hover rivela descrizione e bottone "Prenota". Mobile-friendly, editoriale.
        </p>
        <div className="pc-header">
          <span className="pc-sup">Tutto quello che trovi da EQB</span>
          <h2 className="pc-title">La nostra offerta</h2>
        </div>
        <div className="vc-groups">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="vc-group__header">
                <h3 className="vc-group__title">{g.label}</h3>
                <span className="vc-group__count">{g.services.length} servizi</span>
              </div>
              <div className="vc-group__rows">
                {g.services.map((s) => (
                  <RowCard key={s.name} {...s} cat={g.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          VERSION D — 4 COLONNE IMPILATE
      ════════════════════════════ */}
      <section className="pc-section" id="vd">
        <span className="pc-section__label">D — 4 colonne impilate</span>
        <p className="pc-section__desc">
          Una colonna per categoria. Dentro ogni colonna i servizi sono card foto impilate verticalmente. Hover rivela descrizione e CTA.
        </p>
        <div className="pc-header">
          <span className="pc-sup">Tutto quello che trovi da EQB</span>
          <h2 className="pc-title">La nostra offerta</h2>
        </div>
        <div className="vd-grid">
          {groups.map((g, gi) => (
            <div key={g.label} className="vd-col">
              <span className="vd-col__num">0{gi + 1}</span>
              <h3 className="vd-col__title">{g.label}</h3>
              <div className="vd-col__cards">
                {g.services.map((s) => (
                  <StackedCard key={s.name} {...s} cat={g.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
