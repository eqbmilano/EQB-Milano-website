"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./preview-services.css";

const WA = "https://wa.me/393755153273?text=";

const groups = [
  {
    id: "trattamenti",
    label: "Trattamenti",
    sub: "Terapie manuali e approccio osteopatico",
    img: "/assets/Osteopatia.jpg",
    services: [
      { name: "Osteopatia",              desc: "Valutazione e trattamento del sistema muscolo-scheletrico.", msg: "Ciao! Vorrei info sull'osteopatia" },
      { name: "Fisioterapia",            desc: "Riabilitazione funzionale post-traumatica e preventiva.",   msg: "Ciao! Vorrei info sulla fisioterapia" },
      { name: "Massoterapia",            desc: "Massaggio terapeutico per tensioni muscolari e rigidità.",   msg: "Ciao! Vorrei info sulla massoterapia" },
      { name: "Osteopatia Pediatrica",   desc: "Trattamento dolce e specifico per neonati e bambini.",      msg: "Ciao! Vorrei info sull'osteopatia pediatrica" },
    ],
  },
  {
    id: "movimento",
    label: "Movimento",
    sub: "Percorsi per il corpo in movimento",
    img: "/assets/Pilates.jpg",
    services: [
      { name: "Pilates",     desc: "Metodo Reformer per forza, equilibrio e consapevolezza corporea.", msg: "Ciao! Vorrei info sul Pilates" },
      { name: "Yoga",        desc: "Pratica integrata mente-corpo con insegnanti certificati.",         msg: "Ciao! Vorrei info sullo Yoga" },
      { name: "Posturale",   desc: "Rieducazione globale con approccio personalizzato.",                msg: "Ciao! Vorrei info sul percorso posturale" },
      { name: "Funzionale",  desc: "Allenamento adattivo per forza, mobilità e performance.",          msg: "Ciao! Vorrei info sull'allenamento funzionale" },
    ],
  },
  {
    id: "relax",
    label: "Relax",
    sub: "Rituali per il recupero e il benessere",
    img: "/assets/Bambu-1.jpg",
    services: [
      { name: "Linfodrenante",          desc: "Drenaggio manuale per ridurre ritenzione e gonfiore.",        msg: "Ciao! Vorrei info sul linfodrenante" },
      { name: "Riflessologia Plantare", desc: "Stimolazione dei punti riflessi per riequilibrare l'organismo.", msg: "Ciao! Vorrei info sulla riflessologia plantare" },
      { name: "Coppettazione",          desc: "Tecnica di ventosaterapia per sciogliere aderenze e tensioni.", msg: "Ciao! Vorrei info sulla coppettazione" },
      { name: "Massaggi Rilassanti",    desc: "Massaggi personalizzati per stress, recupero e benessere.",   msg: "Ciao! Vorrei prenotare un massaggio rilassante" },
    ],
  },
  {
    id: "consulenza",
    label: "Consulenza",
    sub: "Supporto professionale per mente e stile di vita",
    img: "/assets/Nutrizionista.jpg",
    services: [
      { name: "Nutrizione",    desc: "Analisi della composizione corporea e piano nutrizionale su misura.", msg: "Ciao! Vorrei prenotare una consulenza nutrizionale" },
      { name: "Mental Coach",  desc: "Percorsi di crescita personale per raggiungere i tuoi obiettivi.",    msg: "Ciao! Vorrei info sul mental coaching" },
      { name: "Counselor",     desc: "Supporto psicologico e ascolto in un ambiente sicuro e riservato.",   msg: "Ciao! Vorrei info sul counseling" },
    ],
  },
];

/* ── Variant 2: Tab Interattivo ── */
function Variant2() {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div className="v2">
      <div className="v2__header">
        <span className="v2__sup">Tutti i percorsi EQB</span>
        <h2 className="v2__title">La nostra offerta</h2>
      </div>
      <div className="v2__tabs">
        {groups.map((g, i) => (
          <button
            key={g.id}
            className={`v2__tab${active === i ? " v2__tab--active" : ""}`}
            onClick={() => setActive(i)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <div className="v2__body">
        <div className="v2__list">
          {group.services.map((s) => (
            <a
              key={s.name}
              href={`${WA}${encodeURIComponent(s.msg)}`}
              target="_blank" rel="noopener noreferrer"
              className="v2__item"
            >
              <div className="v2__item-text">
                <span className="v2__item-name">{s.name}</span>
                <span className="v2__item-desc">{s.desc}</span>
              </div>
              <span className="v2__item-arrow">→</span>
            </a>
          ))}
        </div>
        <div className="v2__photo">
          <div className="v2__photo-wrap">
            <Image
              key={group.img}
              src={group.img}
              alt={group.label}
              fill
              sizes="40vw"
              style={{ objectFit: "cover" }}
            />
            <div className="v2__photo-overlay" />
            <span className="v2__photo-cat">{group.label}</span>
            <span className="v2__photo-label">{group.sub}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreviewServicesPage() {
  return (
    <div className="ps-page">

      {/* ── Sticky nav ── */}
      <nav className="ps-nav">
        <span className="ps-nav__label">Varianti</span>
        <a href="#v1">1 — Luxury Spa Menu</a>
        <a href="#v2">2 — Tab Interattivo</a>
        <a href="#v3">3 — Editorial Index</a>
      </nav>

      {/* ════════════════════════════════════
          VARIANT 1 — Luxury Spa Menu
          4 colonne, solo testo, spazio totale
      ════════════════════════════════════ */}
      <section className="ps-variant v1" id="v1">
        <span className="ps-variant__label">1 — Luxury Spa Menu</span>
        <p className="ps-variant__desc">
          4 colonne, testo puro, sfondo crema. Nessuna foto. Come il menu di una spa d'autore — tutto respira.
        </p>
        <div className="v1__header">
          <span className="v1__sup">Tutti i percorsi EQB</span>
          <h2 className="v1__title">La nostra offerta</h2>
        </div>
        <div className="v1__grid">
          {groups.map((g, gi) => (
            <div key={g.id} className="v1__col">
              <div className="v1__col-photo">
                <Image src={g.img} alt={g.label} fill sizes="25vw" style={{ objectFit: "cover" }} />
              </div>
              <span className="v1__col-num">0{gi + 1}</span>
              <h3 className="v1__col-title">{g.label}</h3>
              <div className="v1__list">
                {g.services.map((s) => (
                  <a
                    key={s.name}
                    href={`${WA}${encodeURIComponent(s.msg)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="v1__item"
                  >
                    <span className="v1__item-name">{s.name}</span>
                    <span className="v1__item-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          VARIANT 2 — Tab Interattivo
          Tab + lista + immagine sticky
      ════════════════════════════════════ */}
      <section className="ps-variant" id="v2">
        <span className="ps-variant__label">2 — Tab Interattivo</span>
        <p className="ps-variant__desc">
          4 tab in cima. Sotto: lista servizi a sinistra con descrizioni, immagine di categoria a destra.
        </p>
        <Variant2 />
      </section>

      {/* ════════════════════════════════════
          VARIANT 3 — Editorial Index
          Titoli grandi, lista 2 colonne
      ════════════════════════════════════ */}
      <section className="ps-variant v3" id="v3">
        <span className="ps-variant__label">3 — Editorial Index</span>
        <p className="ps-variant__desc">
          Ogni categoria occupa una riga intera: titolo grande a sinistra, servizi in griglia 2×2 a destra. Come l'indice di una rivista wellness.
        </p>
        <div className="v3__header">
          <div className="v3__header-text">
            <span className="v3__sup">Tutti i percorsi EQB</span>
            <h2 className="v3__title">La nostra offerta</h2>
          </div>
          <span className="v3__count">{groups.reduce((n, g) => n + g.services.length, 0)} servizi</span>
        </div>
        <div className="v3__groups">
          {groups.map((g, gi) => (
            <div key={g.id} className="v3__group">
              <div className="v3__group-left">
                <div className="v3__group-photo">
                  <Image src={g.img} alt={g.label} fill sizes="320px" style={{ objectFit: "cover" }} />
                </div>
                <span className="v3__group-num">0{gi + 1}</span>
                <h3 className="v3__group-title">{g.label}</h3>
                <p className="v3__group-sub">{g.sub}</p>
              </div>
              <div className="v3__list">
                {g.services.map((s) => (
                  <a
                    key={s.name}
                    href={`${WA}${encodeURIComponent(s.msg)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="v3__item"
                  >
                    <span className="v3__item-name">{s.name}</span>
                    <span className="v3__item-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
