import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale
        eqb: {
          brown: "#322523",      // Marrone principale
          "brown-secondary": "#4B3531", // Marrone secondario
          "bg-light": "#F8F7F4", // Background chiaro (bianco sporco)
          muted: "#A09890",      // Testo muted / label
          separator: "#D4CFC9",  // Separatori
        },
      },
      fontFamily: {
        chopard: ["Chopard", "serif"],
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        // Headline scale
        "h1": ["3.5rem", { lineHeight: "1.2", fontWeight: "400" }],
        "h2": ["2.5rem", { lineHeight: "1.2", fontWeight: "400" }],
        "h3": ["2rem", { lineHeight: "1.2", fontWeight: "400" }],
        // Body
        "body": ["1rem", { lineHeight: "1.85", fontWeight: "300" }],
        "label": ["0.875rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
      backdropBlur: {
        "20": "20px",
      },
      opacity: {
        "50": "0.5",
      },
    },
  },
  plugins: [],
};

export default config;
