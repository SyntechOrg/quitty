import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-lg': 'repeat(auto-fit, minmax(325px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(285px, 1fr))',
      },
      colors: {
        primary: '#0000FF',
        text: '#D1CCD7',
        background: '#111114',
        gray: '#36363e',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #111115 0%, #161618 100%)',
        'radial-gradient-background':
          'radial-gradient(circle at 10% 100%, rgba(0, 0, 255, 0.5) 0%, #121217 25%, transparent 30%), radial-gradient(circle at 90% 10%, rgba(0, 0, 255, 0.5) 0%, #121217 25%, transparent 30%)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1290px',
        },
      },
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [],
};
export default config;
