import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A1420",
        inkSoft: "#080E17",
        paper: "#F6F7F5",
        solar: "#FFB627",
        circuit: "#35D28A",
        wire: "#6E9CB8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-plex-mono)"],
      },
      keyframes: {
        travel: {
          "0%": { left: "-4px", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { left: "104%", opacity: "0" },
        },
      },
      animation: {
        travel: "travel 7s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
