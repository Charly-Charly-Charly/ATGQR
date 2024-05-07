/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, 
    fontFamily: {
      display: ["Outfit", "sans-serif"],
    },
    colors: {

      'clr1': '#1a3a49',
      'clr2': '#f23e47',
      'clr1H': '#357695',
      'clr2H': '#bf3038',
      'black':'#222222',
      'blackh':'#444444',
      'white':'#fff',
      'gray':'#cccccc',
      'whiteh':'#e6e6e6',

    },

  },
  plugins: [],
}
