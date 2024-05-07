/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, 
    colors: {

      'clr1': '#00a5ae',
      'clr2': '#eeac00',
      'clr1H': '#00617f',
      'clr2H': '#ee8700',
      'black':'#222222',
      'blackh':'#444444',
      'white':'#fff',
      'whiteh':'#e6e6e6',

    },
  },
  plugins: [],
}
