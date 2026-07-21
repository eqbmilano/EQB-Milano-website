import type { MetadataRoute } from "next";
import { professionisti } from "./[slug]/data";
import { SITE_URL } from "@/lib/site";

// Pagine live pubbliche del sito v2 + linktree. /candidatura è già noindex (funnel
// candidature), /privacy è pagina di servizio: entrambe escluse di proposito. Il gating
// eqbmilano.it/preview è già gestito da proxy.ts (SITE_GATED), non lo riduplichiamo qui.
const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/benessere", priority: 0.9 },
  { path: "/coworking", priority: 0.9 },
  { path: "/aziende", priority: 0.8 },
  { path: "/spazio", priority: 0.7 },
  { path: "/visione", priority: 0.6 },
  { path: "/contatti", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    priority,
  }));

  const linktreeEntries: MetadataRoute.Sitemap = professionisti.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    priority: 0.5,
  }));

  return [...staticEntries, ...linktreeEntries];
}
