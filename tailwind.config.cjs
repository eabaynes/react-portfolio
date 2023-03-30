/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "cool-white": "#E3F5F6",
        "tan": "#DBBEA5",
        "deep-purple": "#302932",
        "mid-purple": "#413A4E"
    },
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "cursive"]
    },
  },
  },
  plugins: [require("@tailwindcss/forms")],
};
