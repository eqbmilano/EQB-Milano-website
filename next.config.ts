import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Nasconde l'indicatore dev di Next (la "N" in basso a sinistra) durante le
  // revisioni. Vale solo in sviluppo, in produzione non compare comunque.
  devIndicators: false,
  images: {
    formats: ["image/webp"],
    qualities: [75, 85],
    // Le versioni ridimensionate si fermano a 1920 pixel, come le foto in public/assets
    // (scripts/foto-per-il-web.mjs): prima arrivavano a 3840 (06/10/2026).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
