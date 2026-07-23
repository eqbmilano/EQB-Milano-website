import type { NextConfig } from "next";

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

export default nextConfig;
