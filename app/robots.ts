import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Il gating hard (SITE_GATED) è già gestito da proxy.ts via X-Robots-Tag su tutto il
// sito finché non c'è l'ok esplicito di Marco al lancio: qui definiamo solo le regole
// "a regime", che restano valide senza doverle riscrivere al momento dello switch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/candidatura", "/r/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
