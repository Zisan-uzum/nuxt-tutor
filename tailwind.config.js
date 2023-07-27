/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    colors: {
      'oldLace': '#FFF5E4',
      'cornSilk': '#FBF2CF',
      'lightRed': '#FF9494',
      'darkRed': '#FA7070',
      'wisteria': '#BFACE2',
      'indigo': '#B2A4FF',
      'teaGreen': '#C6EBC5',
      'celadon': '#ADCAA5',
      'olivine': '#A1C298'

    }
  }
}

