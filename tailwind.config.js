/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
      },

      fontFamily: {
        sans: ['Almarai', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },

      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.08)',
        'soft-dark': '0 20px 60px rgba(0, 0, 0, 0.25)',
      },
    },
  },

  plugins: [],
}