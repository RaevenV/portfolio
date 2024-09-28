const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        rowdies: ["Rowdies", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        white: "#f8fafc",
        black: "#0f172a",
        blue: "#60a5fa",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
