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
        bullet: "var(--bullet)",
        code: "var(--code)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        disabled: "var(--text-disabled)",
      },
      fontSize: {
        h1: "22px",
        h2: "20px",
        h3: "18px",
        h4: "16px",
        h5: "14px",
        h6: "12px",
        body1: "16px",
        body2: "14px",
        caption: "12px",
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
