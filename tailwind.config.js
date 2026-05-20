/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        ink: "#1a1a2e",
        "ink-light": "#4a4a6a",
        surface: "#f7f6f3",
        "surface-alt": "#eeecea",
        accent: "#212447",
        "accent-light": "#2e3166",
        border: "#ddd9d3",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
