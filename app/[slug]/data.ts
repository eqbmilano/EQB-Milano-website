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

const EQB_WHATSAPP = "https://wa.me/393755153273";
export const EQB_MAPS = "https://www.google.com/maps/search/EQB+Milano+Wellness+Coworking";

export const professionisti: Professionista[] = [
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
      link: `${EQB_WHATSAPP}?text=Ciao%20Federico%2C%20vorrei%20prenotare%20la%20visita%20gratuita!`,
    },
    prenotaLink: `${EQB_WHATSAPP}?text=Ciao%20Federico%2C%20vorrei%20prenotare%20una%20seduta!`,
    sitoWeb: "https://federicomondin.eqbmilano.it",
    social: {
      instagram: "https://instagram.com/dottorfede32",
      whatsapp: `${EQB_WHATSAPP}?text=Ciao%20Federico!`,
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
      link: `${EQB_WHATSAPP}?text=Ciao%20Roberta%2C%20vorrei%20prenotare%20la%20visita%20gratuita!`,
    },
    prenotaLink: `${EQB_WHATSAPP}?text=Ciao%20Roberta%2C%20vorrei%20prenotare%20una%20seduta!`,
    social: {
      instagram: undefined,
      whatsapp: `${EQB_WHATSAPP}?text=Ciao%20Roberta!`,
    },
  },
  {
    slug: "Cristiana-Cognome", // da aggiornare con cognome reale
    nome: "Cristiana",
    cognome: "Cognome",
    specializzazione: "Specializzazione",
    bio: "Descrizione professionale da aggiornare.",
    foto: undefined,
    promo: undefined,
    prenotaLink: `${EQB_WHATSAPP}?text=Ciao%20Cristiana%2C%20vorrei%20prenotare%20una%20seduta!`,
    social: {
      instagram: undefined,
      whatsapp: `${EQB_WHATSAPP}?text=Ciao%20Cristiana!`,
    },
  },
];
