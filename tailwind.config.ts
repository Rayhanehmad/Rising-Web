import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#061426",
          900: "#081a31",
          800: "#0b2340"
        },
        orange: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      boxShadow: {
        engineering: "0 18px 50px rgba(8, 26, 49, .12)"
      }
    }
  },
  plugins: []
};
export default config;
