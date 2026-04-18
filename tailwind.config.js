/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#2A0A5E',
        'cosmic-blue': '#1A1A4A',
        'cosmic-pink': '#FF00FF',
        'cosmic-dark': '#07071A',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(rgba(10, 10, 42, 0.98), rgba(10, 10, 42, 0.98))',
      }
    },
  },
  plugins: [],
}
