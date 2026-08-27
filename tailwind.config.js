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
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        paper: "var(--color-paper)",
        "paper-2": "var(--color-paper-2)",
        rule: "var(--color-rule)",
        neutral: "var(--color-neutral)",
        muted: "var(--color-muted)",
        "ink-2": "var(--color-ink-2)",
        ink: "var(--color-ink)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        "accent-ink": "var(--color-accent-ink)",
      },
      maxWidth: {
        measure: "68ch",
        prose: "72ch",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
