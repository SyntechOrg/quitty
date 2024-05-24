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
        "auto-fit": "repeat(auto-fit, minmax(255px, 1fr))",
      },
      colors: {
        primary: "#0000FF",
        text: "#D1CCD7",
        background: "#111114",
        gray: "#36363e",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1290px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
