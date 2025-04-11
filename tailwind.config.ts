import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // ⬅️ ini penting banget!
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        galaxyPurple: "#8a2be2",
        galaxyBlue: "#4b0082",
        galaxyPink: "#ff69b4",
      },
      boxShadow: {
        glow: "0 0 15px rgba(138, 43, 226, 0.5)", // buat teks neon atau card glowing
      },
      backgroundImage: {
        galaxy: "url('/stars.svg')", // ⬅️ taruh file SVG-nya di folder public
      },
    },
  },
  plugins: [],
};

export default config;
