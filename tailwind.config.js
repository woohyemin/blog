/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)"],
        mont: ["var(--font-montserrat)"],
      },
      colors: {
        background: "var(--background)",
        basicBtnBg: "var(--basic-button-background)",
        underlineSecondary: "var(--text-secondary)",
        divider: "var(--divider)",
        code: "var(--code)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        disabled: "var(--text-disabled)",
      },
      fontSize: {
        h1: "28px",
        h2: "24px",
        h3: "20px",
        h4: "18px",
        h5: "16px",
        h6: "14px",
        body1: "12px",
        body2: "10px",
        caption: "10px",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
};
