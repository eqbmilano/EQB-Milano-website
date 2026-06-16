"use client";
import React from "react";
import Image from "next/image";
import "./preview-nutrizione.css";

const WA = "https://wa.me/393755153273?text=";

/* ── Dati base ── */
const catalogs = {
  trattamenti: {
    label: "Trattamenti",
    services: [
      { name: "Osteopatia",            img: "/assets/Osteopatia.jpg" },
      { name: "Fisioterapia",          img: "/assets/Federico-lavoro-2.jpg" },
      { name: "Massoterapia",          img: "/assets/Massaggio-decontratturante.jpg" },
      { name: "Osteopatia Pediatrica", img: "/assets/Osteopatia-cranio.jpg" },
    ],
  },
  movimento: {
    label: "Movimento",
    services: [
      { name: "Pilates",    img: "/assets/Pilates.jpg" },
      { name: "Yoga",       img: "/assets/02_Pilates_e_Yoga.jpeg" },
      { name: "Posturale",  img: "/assets/Federico-lavoro-1.jpg" },
      { name: "Funzionale", img: "/assets/Sala-Allenamento.jpg" },
    ],
  },
  relax: {
    label: "Relax",
    services: [
      { name: "Linfodrenante",          img: "/assets/Massaggi-7.jpg" },
      { name: "Riflessologia Plantare", img: "/assets/Riflessologia.jpg" },
      { name: "Coppettazione",          img: "/assets/Conchiglie.jpg" },
      { name: "Massaggi Rilassanti",    img: "/assets/Bambu-1.jpg" },
    ],
  },
  consulenza: {
    label: "Consulenza",
    services: [
      { name: "Nutrizione",   img: "/assets/Nutrizionista.jpg", featured: true },
      { name: "Mental Coach", img: "/assets/Noemi.jpg" },
      { name: "Counselor",    img: "/assets/Roberta-Boara.jpg" },
    ],
  },
};

function Card({ name, img, cat, featured }: {
  name: string; img: string; cat: string; featured?: boolean;
}) {
  return (
    <div className={`pn-card${featured ? " pn-card--featured" : ""}`}>
      <div className="pn-card__img">
        <Image src={img} alt={name} fill sizes="25vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="pn-card__overlay" />
      <span className="pn-card__cat">{cat}</span>
      {featured && <span className="pn-card__featured-badge">★ In evidenza</span>}
      <div className="pn-card__body">
        <span className="pn-card__name">{name}</span>
        <a href={`${WA}${encodeURIComponent("Ciao! Vorrei info su " + name)}`}
           target="_blank" rel="noopener noreferrer" className="pn-card__btn">
          Prenota →
        </a>
      </div>
    </div>
  );
}

function CatalogGroup({ label, services, cat, cols = 4, highlight }: {
  label: string;
  services: { name: string; img: string; featured?: boolean }[];
  cat: string;
  cols?: number;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="pn-group__header">
        <h3 className="pn-group__title">{label}</h3>
        {highlight && <span className="pn-group__highlight">In evidenza</span>}
        <span className="pn-group__count">{services.length} servizi</span>
      </div>
      <div className={`pn-cards${cols === 3 ? " pn-cards--3" : ""}`}>
        {services.map((s) => (
          <Card key={s.name} name={s.name} img={s.img} cat={cat} featured={s.featured} />
        ))}
      </div>
    </div>
  );
}

export default function PreviewNutrizione() {
  return (
    <div className="pn-page">

      <nav className="pn-nav">
        <span className="pn-nav__label">Opzioni</span>
        <a href="#o1">1 — 4° Blocco Focus</a>
        <a href="#o2">2 — Spotlight Banner</a>
        <a href="#o3">3 — Categoria riordinata</a>
        <a href="#o4">4 — Nutrizione in Movimento</a>
      </nav>

      {/* ════════════════════════════════════════
          OPZIONE 1 — 4° BLOCCO FOCUS
          Un feature block dedicato prima del catalog
      ════════════════════════════════════════ */}
      <section className="pn-section" id="o1">
        <span className="pn-section__badge">Opzione 1</span>
        <p className="pn-section__desc">
          Aggiungi un 4° blocco focus tra i 3 esistenti e il catalog grid. Titolo narrativo, tre discipline incrociate, CTA. Nutrizione appare subito dopo Relax & Recovery, prima di scrollare al catalog.
        </p>

        <div className="o1-feature">
          <div className="o1-feature__img">
            <Image
              src="/assets/Nutrizionista-dettaglio.jpg"
              alt="Nutrizione"
              fill sizes="50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="o1-feature__content">
            <span className="o1-feature__num">04 — Punto di partenza</span>
            <h2 className="o1-feature__title">
              Rimettersi in forma,<br />per davvero.
            </h2>
            <p className="o1-feature__body">
              Il corpo cambia quando cambia il modo in cui lo nutri, lo muovi e lo recuperi. Un percorso integrato tra nutrizione, allenamento e benessere fisico, costruito intorno a te.
            </p>
            <div className="o1-feature__pills">
              <span className="o1-feature__pill">Nutrizione</span>
              <span className="o1-feature__pill">Linfodrenante</span>
              <span className="o1-feature__pill">Allenamento Funzionale</span>
            </div>
            <a href={`${WA}${encodeURIComponent("Ciao! Vorrei info sul percorso di ricomposizione corporea")}`}
               target="_blank" rel="noopener noreferrer" className="o1-feature__cta">
              Inizia il percorso →
            </a>
          </div>
        </div>
        <p className="o1-note">↓ poi segue il catalog grid (Trattamenti / Movimento / Relax / Consulenza) come nella variante B</p>

        <div className="pn-catalog" style={{ marginTop: "4rem" }}>
          <CatalogGroup {...catalogs.trattamenti} cat="Trattamenti" />
          <CatalogGroup {...catalogs.movimento} cat="Movimento" />
          <CatalogGroup {...catalogs.relax} cat="Relax" />
          <CatalogGroup {...catalogs.consulenza} cat="Consulenza" cols={3} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          OPZIONE 2 — SPOTLIGHT BANNER
          Banner compatto tra feature blocks e catalog
      ════════════════════════════════════════ */}
      <section className="pn-section" id="o2">
        <span className="pn-section__badge">Opzione 2</span>
        <p className="pn-section__desc">
          Banner orizzontale scuro dedicato alla Nutrizione, posizionato tra i 3 feature block e il catalog. Più compatto del blocco focus, non interrompe il ritmo della pagina.
        </p>

        <div className="o2-spotlight">
          <div className="o2-spotlight__text">
            <span className="o2-spotlight__sup">Servizio in evidenza</span>
            <h2 className="o2-spotlight__title">
              Nutrizione<br />su misura.
            </h2>
            <p className="o2-spotlight__body">
              Analisi della composizione corporea e piano nutrizionale personalizzato. Non una dieta, ma un cambiamento che dura.
            </p>
            <div className="o2-spotlight__pills">
              <span className="o2-spotlight__pill">Composizione corporea</span>
              <span className="o2-spotlight__pill">Piano personalizzato</span>
              <span className="o2-spotlight__pill">Follow-up continuo</span>
            </div>
            <a href={`${WA}${encodeURIComponent("Ciao! Vorrei prenotare una consulenza nutrizionale")}`}
               target="_blank" rel="noopener noreferrer" className="o2-spotlight__cta">
              Prenota una consulenza
            </a>
          </div>
          <div className="o2-spotlight__img">
            <Image
              src="/assets/Nutrizionista.jpg"
              alt="Nutrizione"
              fill sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
        <p className="o2-note">↓ poi segue il catalog grid come nella variante B</p>

        <div className="pn-catalog" style={{ marginTop: "4rem" }}>
          <CatalogGroup {...catalogs.trattamenti} cat="Trattamenti" />
          <CatalogGroup {...catalogs.movimento} cat="Movimento" />
          <CatalogGroup {...catalogs.relax} cat="Relax" />
          <CatalogGroup {...catalogs.consulenza} cat="Consulenza" cols={3} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          OPZIONE 3 — CATEGORIA RIORDINATA
          "Benessere Integrato" come prima categoria
      ════════════════════════════════════════ */}
      <section className="pn-section" id="o3">
        <span className="pn-section__badge">Opzione 3</span>
        <p className="pn-section__desc">
          Rinomina e porta in cima la categoria "Consulenza" con un nome più evocativo. Nutrizione è la prima card in assoluto del catalog — massima visibilità senza aggiungere sezioni.
        </p>

        <div className="pn-catalog">
          <CatalogGroup
            label="Benessere Integrato"
            services={[
              { name: "Nutrizione",   img: "/assets/Nutrizionista.jpg", featured: true },
              { name: "Mental Coach", img: "/assets/Noemi.jpg" },
              { name: "Counselor",    img: "/assets/Roberta-Boara.jpg" },
            ]}
            cat="Benessere Integrato"
            cols={3}
            highlight
          />
          <CatalogGroup {...catalogs.trattamenti} cat="Trattamenti" />
          <CatalogGroup {...catalogs.movimento} cat="Movimento" />
          <CatalogGroup {...catalogs.relax} cat="Relax" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          OPZIONE 4 — NUTRIZIONE IN MOVIMENTO
          Spostata in Movimento come primo servizio
      ════════════════════════════════════════ */}
      <section className="pn-section" id="o4">
        <span className="pn-section__badge">Opzione 4</span>
        <p className="pn-section__desc">
          Nutrizione viene spostata nella categoria "Movimento" come primo servizio. Logica: nutrizione come parte del percorso di allenamento e cambiamento fisico. Compare in prima riga, affiancata a Pilates, Yoga, Posturale.
        </p>

        <div className="pn-catalog">
          <CatalogGroup {...catalogs.trattamenti} cat="Trattamenti" />
          <CatalogGroup
            label="Movimento & Nutrizione"
            services={[
              { name: "Nutrizione",   img: "/assets/Nutrizionista.jpg", featured: true },
              { name: "Pilates",      img: "/assets/Pilates.jpg" },
              { name: "Yoga",         img: "/assets/02_Pilates_e_Yoga.jpeg" },
              { name: "Posturale",    img: "/assets/Federico-lavoro-1.jpg" },
              { name: "Funzionale",   img: "/assets/Sala-Allenamento.jpg" },
            ]}
            cat="Movimento & Nutrizione"
          />
          <CatalogGroup {...catalogs.relax} cat="Relax" />
          <CatalogGroup
            label="Consulenza"
            services={[
              { name: "Mental Coach", img: "/assets/Noemi.jpg" },
              { name: "Counselor",    img: "/assets/Roberta-Boara.jpg" },
            ]}
            cat="Consulenza"
            cols={3}
          />
        </div>
      </section>

    </div>
  );
}
