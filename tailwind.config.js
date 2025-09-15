/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1A2E44',
        'brand-gold': '#C89B3F',
        'brand-beige': '#F5F0E8',
        'brand-text': '#333333',
        'brand-red': '#803D3B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
