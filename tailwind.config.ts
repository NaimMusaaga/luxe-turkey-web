import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        gold: "#D4AF37",
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
