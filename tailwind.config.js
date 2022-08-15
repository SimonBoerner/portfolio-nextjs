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
      palette1: "#ABD3DB",
      palette2: "#C2E6DF",
      palette3: "#D1EBD8",
      palette4: "#E5F5DC",
      palette5: "#FFFFE1",
      palette6: "#8E4765",
      palette7: "#DDF2F5",
      palette8: "#CBE5C0",
      sidebar: "#C3D8D1",
    },
  },
  plugins: [require("@beaubus/svg-patterns-for-tailwindcss")],
};
