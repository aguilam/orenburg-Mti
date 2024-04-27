/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '450px',

      'md': '1024px',

      'lg': '1200px',
    },
    fontFamily: {
      DrukWide: ["DrukWide"],
      MabryPro: ["MabryPro"],
    },
  },
  plugins: [],
}