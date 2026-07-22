import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/webp"],
    qualities: [75, 85],
  },
};

export default withNextIntl(nextConfig);
