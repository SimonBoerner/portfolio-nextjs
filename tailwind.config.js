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
      palette1: "#60A3A9",
      palette2: "#4E557E",
      palette3: "#E9D985",
      palette4: "#E9D985",
      palette5: "#5E7557",
      palette6: "#8E4765",
      palette7: "#DDF2F5",
    },
  },
  plugins: [require("@beaubus/svg-patterns-for-tailwindcss")],
};
