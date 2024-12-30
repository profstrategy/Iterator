import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-color-subtle": "var( --brand-color-subtle)",
        "brand-color": "var(--brand-color)",
        "brand-color-light": "var(--brand-color-light)",
        "brand-color-main": "var( --brand-color-main)",
        "brand-color-white": "var(--brand-color-white)",
        "brand-color-black": "var(--brand-color-black)",
        "brand-color-text": "var(--brand-color-text)",
        "brand-color-text-1": "var(--brand-color-text-1)",
        "background": "var(--background)",
        "text-hover-color": "var(--sidebar-primary)",

      },

      screens: {
        xmd: '175px',
        mobile: '375px',
        tab_md: '818px',
      },
    },
  },
  plugins: [],
};
export default config;
