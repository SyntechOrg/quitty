import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-lg": "repeat(auto-fit, minmax(325px, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(285px, 1fr))",
      },
      colors: {
        primary: "#00C9A5",
        text: "#0C1726",
        background: "#F1FAFB",
      },
      backgroundImage: {},
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1280px",
        },
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  plugins: [],
};
export default config;
