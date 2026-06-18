import Link from "next/link";
import "./entry.css";

export const metadata = { title: "Ingresso — Varianti — EQB Milano" };

const variants = [
  {
    href: "/entry-a",
    tag: "A",
    name: "Split puro 50/50",
    desc: "Due metà esatte, foto a tutta altezza. Passi il mouse su una e si espande, l'altra si restringe. Massima forza di conversione.",
  },
  {
    href: "/entry-b",
    tag: "B",
    name: "Brand-moment + split",
    desc: "2 secondi di hero EQB (logo + claim), poi lo schermo si apre nello split. Tiene il wow del brand prima del bivio.",
  },
  {
    href: "/entry-c",
    tag: "C",
    name: "Split diagonale",
    desc: "Divisione diagonale invece che verticale. La linea segue il cursore: ti sposti a sinistra e cresce il lato professionista, e viceversa.",
  },
  {
    href: "/entry-d",
    tag: "D",
    name: "Scena unica divergente",
    desc: "Una sola scena coesa, brand al centro, due direzioni che divergono ai lati. La più elegante e on-brand.",
  },
  {
    href: "/entry-e",
    tag: "E",
    name: "Home intatta + deviatore",
    desc: "La home attuale resta identica e stupenda. Si aggiunge un invito ben visibile per il cliente (pill in alto) e un bivio esplicito subito sotto l'hero. Niente split: non perdi la home.",
  },
];

export default function EntryIndexPage() {
  return (
    <div className="ei-page">
      <header className="ei-header">
        <span className="ei-sup">EQB Milano · Esplorazione ingresso</span>
        <h1 className="ei-title">Quattro modi di entrare.</h1>
        <p className="ei-lead">
          Quattro varianti dello stesso bivio: professionista o cliente.
          Aprile, provale, e dimmi quale ti convince. Da ognuna puoi cliccare
          dentro i due mondi reali (/coworking e /benessere).
        </p>
      </header>

      <div className="ei-grid">
        {variants.map((v) => (
          <Link key={v.tag} href={v.href} className="ei-card">
            <span className="ei-card__tag">{v.tag}</span>
            <span className="ei-card__name">{v.name}</span>
            <span className="ei-card__desc">{v.desc}</span>
            <span className="ei-card__cta">Apri la variante →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
