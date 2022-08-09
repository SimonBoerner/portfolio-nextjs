/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "box-pattern": "url('/public/patterns/pattern-boxes.svg')",
      },
      screens: {
        xs: "375px",
      },
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      PARAGRAPH: ["Josefin Slab", "serif"],
    },
    colors: {
      accentblue: "#157698",
      black: "#000",
      white: "#FFF",
      red: "#C1618E",
      palette1: "#157698",
      palette2: "#58A17D",
      palette3: "#C6B148",
      palette4: "#D16E34",
      palette5: "#F0692B",
    },
  },
  plugins: [require("@beaubus/svg-patterns-for-tailwindcss")],
};
