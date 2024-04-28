import { Color } from "./Color";
import { ThemeStyleType } from "./types/ThemeStyleType";

export const lightTheme: ThemeStyleType = {
  palette: {
    background: {
      default: Color.gray["100"],
      primary: Color.beige["100"],
      secondary: "",
      paper: Color.gray["100"],
    },
    primary: {
      light: Color.beige["300"],
      main: Color.beige["500"],
      dark: Color.beige["700"],
      contrastText: Color.gray["900"],
    },
    gray: {
      light: Color.gray["300"],
      main: Color.gray["500"],
      dark: Color.gray["700"],
    },
    text: {
      primary: Color.gray["800"],
      secondary: Color.gray["600"],
      disabled: Color.beige["300"],
    },
    button: {
      background: {
        default: Color.gray["250"],
        hover: Color.gray["500"],
        active: "blue",
      },
    },
  },

  effect: {
    shadow: {
      small: "",
      medium: "",
      large: "",
    },
  },

  typography: {
    variant: {
      primary: "'Noto Sans KR', sans-serif",
      secondary: "",
    },
    weight: {
      light: 300,
      regular: 500,
      bold: 700,
    },
    size: {
      h1: { fontSize: "64px" },
      h2: { fontSize: "48px" },
      h3: { fontSize: "40px" },
      h4: { fontSize: "32px" },
      h5: { fontSize: "28px" },
      h6: { fontSize: "24px" },
      body1: { fontSize: "20px" },
      body2: { fontSize: "16px" },
      caption: { fontSize: "14px" },
    },
    defaultStyles: {
      wordBreak: "keep-all",
      lineHeight: "140%",
      letterSpacing: "-0.03em",
    },
  },
};

export const darkTheme: ThemeStyleType = {
  palette: {
    background: {
      default: Color.gray["900"],
      primary: Color.beige["100"],
      secondary: "",
      paper: Color.gray["800"],
    },
    primary: {
      light: Color.beige["300"],
      main: Color.beige["500"],
      dark: Color.beige["700"],
      contrastText: Color.gray["900"],
    },
    gray: {
      light: Color.gray["300"],
      main: Color.gray["500"],
      dark: Color.gray["700"],
    },
    text: {
      primary: Color.white,
      secondary: Color.gray["300"],
      disabled: Color.gray["500"],
    },
    button: {
      background: {
        default: "red",
        hover: Color.gray["700"],
        active: "blue",
      },
    },
  },

  effect: {
    shadow: {
      small: "",
      medium: "",
      large: "",
    },
  },

  typography: {
    variant: {
      primary: "'Noto Sans KR', sans-serif",
      secondary: "",
    },
    weight: {
      light: 300,
      regular: 500,
      bold: 700,
    },
    size: {
      h1: { fontSize: "64px" },
      h2: { fontSize: "48px" },
      h3: { fontSize: "40px" },
      h4: { fontSize: "32px" },
      h5: { fontSize: "28px" },
      h6: { fontSize: "24px" },
      body1: { fontSize: "20px" },
      body2: { fontSize: "16px" },
      caption: { fontSize: "14px" },
    },
    defaultStyles: {
      wordBreak: "keep-all",
      lineHeight: "140%",
      letterSpacing: "-0.03em",
    },
  },
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
