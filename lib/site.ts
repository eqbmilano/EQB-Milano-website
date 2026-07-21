/**
 * NAP e dati d'entità EQB Milano — fonte unica per JSON-LD, sitemap, robots e OG image.
 * Indirizzo = sede operativa (Viale Regina Margherita 43), non la sede legale di Segrate
 * usata solo nell'informativa privacy: è la sede operativa quella che i clienti visitano.
 */

export const SITE_URL = "https://eqbmilano.it";
export const SITE_NAME = "EQB Milano";

export const ORG = {
  name: SITE_NAME,
  legalName: "EQB Milano di Adinolfi Marco",
  description:
    "Wellness & Fitness Coworking a Milano: spazi in affitto per professionisti del movimento e della salute, e trattamenti di osteopatia, fisioterapia, pilates e massaggi per chi cerca il proprio benessere.",
  url: SITE_URL,
  telephone: "+39 375 515 3273",
  email: "info@eqbmilano.it",
  vatID: "14601140966",
  address: {
    streetAddress: "Viale Regina Margherita 43",
    addressLocality: "Milano",
    postalCode: "20122",
    addressRegion: "MI",
    addressCountry: "IT",
  },
  sameAs: [
    "https://www.instagram.com/eqbmilano/",
    "https://www.linkedin.com/company/eqbmilano",
    "https://wa.me/393755153273",
  ],
  logoPath: "/assets/Logo-Marrone.svg",
} as const;

export type ServiceAudience = "B2C" | "B2B";

/**
 * Catalogo servizi bilanciato B2C/B2A: nessuno dei due pubblici è "primario" (deciso con
 * Mattia il 21/07). Nomi ripresi dalle categorie reali già in uso su /benessere, /coworking
 * e /aziende — non descrizioni inventate.
 */
export const SERVICE_CATALOG: {
  audience: ServiceAudience;
  name: string;
  description: string;
}[] = [
  {
    audience: "B2C",
    name: "Trattamenti",
    description: "Osteopatia, fisioterapia e trattamenti manuali per il dolore muscoloscheletrico.",
  },
  {
    audience: "B2B",
    name: "Coworking per professionisti",
    description: "Sale in affitto per osteopati, fisioterapisti, personal trainer e professionisti del benessere.",
  },
  {
    audience: "B2C",
    name: "Movimento",
    description: "Pilates, ChinesioPilates e allenamento funzionale.",
  },
  {
    audience: "B2B",
    name: "Aziende & eventi",
    description: "Spazi per workshop ed eventi aziendali a Milano.",
  },
  {
    audience: "B2C",
    name: "Recupero & Benessere",
    description: "Massaggi decontratturanti, linfodrenanti e riflessologia plantare.",
  },
  {
    audience: "B2B",
    name: "Partnership e collaborazioni",
    description: "Collaborazioni continuative con aziende del settore benessere e movimento.",
  },
  {
    audience: "B2C",
    name: "Consulenza",
    description: "Nutrizione e consulenza per la forma fisica.",
  },
];

/**
 * SEO dedicato a Federico Mondin — priorità massima confermata con Mattia il 21/07.
 * Keyword confermate, nessuna keyword di quartiere finché non c'è un'associazione
 * geografica commerciale confermata.
 */
export const FEDERICO_SEO = {
  title: "Federico Mondin — Osteopata e Fisioterapista a Milano | EQB Milano",
  description:
    "Federico Mondin, osteopata e fisioterapista a Milano: trattamento del dolore muscoloscheletrico e recupero funzionale, con prima visita gratuita, presso EQB Wellness Coworking.",
  keywords: [
    "osteopata Milano",
    "fisioterapista Milano",
    "osteopata e fisioterapista Milano",
    "dolore muscoloscheletrico Milano trattamento",
    "recupero funzionale Milano fisioterapista",
    "osteopata Milano valutazione posturale gratuita",
    "mal di schiena osteopata Milano",
  ],
  knowsAbout: [
    "Osteopatia",
    "Fisioterapia",
    "Dolore muscoloscheletrico",
    "Recupero funzionale",
    "Valutazione posturale",
  ],
} as const;
