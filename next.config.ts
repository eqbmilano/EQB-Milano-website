import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Nasconde l'indicatore dev di Next (la "N" in basso a sinistra) durante le
  // revisioni. Vale solo in sviluppo, in produzione non compare comunque.
  devIndicators: false,
  images: {
    formats: ["image/webp"],
    qualities: [75, 85],
  },
};

export default withNextIntl(nextConfig);
