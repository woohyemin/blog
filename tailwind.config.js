/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
        Montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        background: "var(--background)",
        basicBtnBg: "var(--basic-button-background)",
        btnBg: "var(--btn-background)",
        btnText: "var(--btn-text)",
        btnNum: "var(--btn-num)",
        btnActiveBg: "var(--btn-active-background)",
        btnActiveText: "var(--btn-active-text)",
        btnActiveNum: "var(--btn-active-num)",
        underlineSecondary: "var(--text-secondary)",
        divider: "var(--divider)",
        underline: "var(--underline)",
        bullet: "var(--bullet)",
        code: "var(--code)",
        chip: "var(--chip)",
        highlight: "var(--highlight)",
        del: "var(--del)",
        paper: "var(--paper-background)",
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
      boxShadow: {
        highlight: "var(--highlight) 0px -10px 0px inset",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-in-out",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
