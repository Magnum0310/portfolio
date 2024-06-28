/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "540px",
      "3xl": "1600px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      morganite: ["Morganite", "sans-serif"],
      prestage: ["Prestage", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        "start-black": "#0B1320",
        "start-blue": "#394D5F",
        "start-white": "#FEF9E6",
        "underground-yellow": "#F8BE4F",
        "underground-silver": "#E3EBED",
      },
      screens: {
        "2xl": "1440px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
