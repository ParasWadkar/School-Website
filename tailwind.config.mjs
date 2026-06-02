/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:     '#1a3a8f',
          'blue-light': '#2554c7',
          red:      '#cc1a1a',
          yellow:   '#f0b429',
          'yellow-light': '#fde68a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
