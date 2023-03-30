/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "cool-white": "#E3F5F6",
        tan: "#DBBEA5",
        "deep-purple": "#302932",
        "mid-purple": "#413A4E",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "cursive"],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "black",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20, end), blink .7s step-end infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
