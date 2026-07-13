import type { MetadataRoute } from "next";
import { professionisti } from "./[slug]/data";

const BASE = "https://www.eqbmilano.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/spazio", "/coworking", "/benessere", "/visione", "/contatti", "/privacy"];
  return [
    ...pages.map((p) => ({
      url: `${BASE}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...professionisti.map((p) => ({
      url: `${BASE}/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
