"use client";
import Image from "next/image";
import "./preview-closing.css";

const WA = "https://wa.me/393755153273?text=";
const msg = encodeURIComponent("Ciao! Vorrei sapere di più su EQB Milano");

export default function PreviewClosingPage() {
  return (
    <div className="pcl-page">

      <nav className="pcl-nav">
        <span className="pcl-nav__label">Varianti</span>
        <a href="#va">A — Solo tipo (scuro)</a>
        <a href="#vb">B — Solo tipo (luce)</a>
        <a href="#vc">C — Split con persona</a>
        <a href="#vd">D — Foto persona full</a>
      </nav>

      {/* ════════════════════════════
          A — SOLO TIPOGRAFIA, SCURO
      ════════════════════════════ */}
      <section className="pcl-section" id="va">
        <div className="pcl-section__meta">
          <span className="pcl-section__badge">A — Solo tipo (scuro)</span>
          <span className="pcl-section__desc">Nessuna foto. Background scuro, titolo enorme. La tipografia è l'impatto.</span>
        </div>
        <div className="va-closing">
          <div className="va-closing__inner">
            <span className="va-closing__label">Inizia da qui</span>
            <h2 className="va-closing__title">
              Il tuo percorso<br />inizia con una<br />conversazione.
            </h2>
            <div className="va-closing__footer">
              <p className="va-closing__body">
                Raccontaci dove sei e dove vuoi arrivare.<br />Il resto lo costruiamo insieme.
              </p>
              <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer" className="va-closing__cta">
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          B — SOLO TIPOGRAFIA, LUCE
      ════════════════════════════ */}
      <section className="pcl-section" id="vb">
        <div className="pcl-section__meta">
          <span className="pcl-section__badge">B — Solo tipo (luce)</span>
          <span className="pcl-section__desc">Nessuna foto. Background crema, testo scuro. Più intimo, respirabile.</span>
        </div>
        <div className="vb-closing">
          <div className="vb-closing__inner">
            <span className="vb-closing__label">Inizia da qui</span>
            <h2 className="vb-closing__title">
              Il tuo percorso<br />inizia con una<br />conversazione.
            </h2>
            <p className="vb-closing__body">
              Raccontaci dove sei e dove vuoi arrivare.<br />Il resto lo costruiamo insieme.
            </p>
            <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer" className="vb-closing__cta">
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          C — SPLIT CON PERSONA
      ════════════════════════════ */}
      <section className="pcl-section" id="vc">
        <div className="pcl-section__meta">
          <span className="pcl-section__badge">C — Split con persona</span>
          <span className="pcl-section__desc">Panel scuro testo a sinistra, foto di un trattamento a destra. La foto è la risposta visiva al testo.</span>
        </div>
        <div className="vc-closing">
          <div className="vc-closing__panel">
            <span className="vc-closing__label">Inizia da qui</span>
            <h2 className="vc-closing__title">
              Il tuo percorso<br />inizia con una<br />conversazione.
            </h2>
            <p className="vc-closing__body">
              Raccontaci dove sei e dove vuoi arrivare. Il resto lo costruiamo insieme.
            </p>
            <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer" className="vc-closing__cta">
              Scrivici su WhatsApp →
            </a>
          </div>
          <div className="vc-closing__img">
            <Image src="/assets/Federico-trattamento.jpg" alt="EQB — trattamento" fill sizes="50vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          D — FOTO PERSONA FULL-BLEED
      ════════════════════════════ */}
      <section className="pcl-section" id="vd">
        <div className="pcl-section__meta">
          <span className="pcl-section__badge">D — Foto persona full</span>
          <span className="pcl-section__desc">Foto full-bleed di Federico al lavoro, testo ancorato in basso a sinistra. L'immagine racconta già la conversazione.</span>
        </div>
        <div className="vd-closing">
          <div className="vd-closing__img">
            <Image src="/assets/Federico-lavoro-2.jpg" alt="EQB — Federico" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 25%" }} />
          </div>
          <div className="vd-closing__grad" />
          <div className="vd-closing__content">
            <span className="vd-closing__label">Inizia da qui</span>
            <h2 className="vd-closing__title">
              Il tuo percorso<br />inizia con una<br />conversazione.
            </h2>
            <p className="vd-closing__body">
              Raccontaci dove sei e dove vuoi arrivare.<br />Il resto lo costruiamo insieme.
            </p>
            <a href={`${WA}${msg}`} target="_blank" rel="noopener noreferrer" className="vd-closing__cta">
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
