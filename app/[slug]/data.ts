export type Promo = {
  label: string;
  descrizione: string;
  link: string;
};

export type Professionista = {
  slug: string;
  nome: string;
  cognome: string;
  specializzazione: string;
  bio: string;
  foto?: string;
  promo?: Promo;
  prenotaLink: string;
  sitoWeb?: string;
  social: {
    instagram?: string;
    whatsapp?: string;
    linkedin?: string;
  };
};

export const EQB_MAPS = "https://www.google.com/maps/search/EQB+Milano+Wellness+Coworking";

export const professionisti: Professionista[] = [
  {
    slug: "Cristiana-Curioni",
    nome: "Cristiana",
    cognome: "Curioni",
    specializzazione: "Specialista in ChinesioPilates",
    bio: "Percorsi di riequilibrio posturale per donne che vogliono tornare a muoversi bene — davvero, non solo in palestra.",
    foto: "/assets/professionisti/cristiana-curioni.jpg",
    promo: {
      label: "Valutazione Posturale",
      descrizione: "Prima sessione in studio: 30 minuti per analizzare il tuo corpo e capire da dove partire.",
      link: "https://eqbstudiocoworking.as.me/?calendarID=11601280",
    },
    prenotaLink: "https://eqbstudiocoworking.as.me/?calendarID=11601280",
    sitoWeb: undefined,
    social: {
      instagram: undefined,
      whatsapp: undefined,
      linkedin: undefined,
    },
  },
  {
    slug: "Federico-Mondin",
    nome: "Federico",
    cognome: "Mondin",
    specializzazione: "Fisioterapista · Osteopata",
    bio: "Fisioterapista e osteopata specializzato nel trattamento del dolore muscoloscheletrico e nel recupero funzionale. Ti aiuto a ritrovare movimento e benessere.",
    foto: undefined,
    promo: {
      label: "Prima Visita Gratuita",
      descrizione: "Scopri il tuo percorso con una visita esplorativa gratuita, senza impegno.",
      link: "https://wa.me/393755153273?text=Ciao%20Federico%2C%20vorrei%20prenotare%20la%20visita%20gratuita!",
    },
    prenotaLink: "https://wa.me/393755153273?text=Ciao%20Federico%2C%20vorrei%20prenotare%20una%20seduta!",
    sitoWeb: "https://federicomondin.eqbmilano.it",
    social: {
      instagram: "https://instagram.com/dottorfede32",
      whatsapp: "https://wa.me/393755153273?text=Ciao%20Federico!",
      linkedin: undefined,
    },
  },
  {
    slug: "Roberta-Boara",
    nome: "Roberta",
    cognome: "Boara",
    specializzazione: "Riflessologa Plantare",
    bio: "Riflessologa plantare certificata. Attraverso la riflessologia lavoro sull'equilibrio energetico del corpo, favorendo il rilassamento profondo e il benessere naturale.",
    foto: undefined,
    promo: {
      label: "Prima Visita Gratuita",
      descrizione: "Scopri la riflessologia plantare con una sessione esplorativa gratuita.",
      link: "https://wa.me/393755153273?text=Ciao%20Roberta%2C%20vorrei%20prenotare%20la%20visita%20gratuita!",
    },
    prenotaLink: "https://wa.me/393755153273?text=Ciao%20Roberta%2C%20vorrei%20prenotare%20una%20seduta!",
    sitoWeb: undefined,
    social: {
      instagram: undefined,
      whatsapp: undefined,
      linkedin: undefined,
    },
  },
];
