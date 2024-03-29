/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      lightBlack: "#3D3B40",
      darkBlue: "#525CEB",
      lightBlue: "#BFCFE7",
      ligthWhite: "F8EDFF"
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
      'SofiaSans': ['Sofia Sans', 'sans-serif'], // Added custom font
      'LeagueSpartan': ['League Spartan', 'sans-serif'], // Added custom font
    },
    extend: {},
  },
  plugins: [],
}