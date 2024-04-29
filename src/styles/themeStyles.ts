import { Color } from "./Color";
import { ThemeStyleType } from "./types/styled";

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
      disabled: Color.gray["400"],
    },
    button: {
      background: {
        default: Color.gray["250"],
        hover: Color.gray["500"],
        active: "blue",
      },
    },
    logo: {
      color: {
        basic: Color.gray["800"],
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
      secondary: "'Montserrat', sans-serif",
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 500,
    },
    size: {
      h1: "64px",
      h2: "48px",
      h3: "40px",
      h4: "32px",
      h5: "28px",
      h6: "24px",
      body1: "20px",
      body2: "16px",
      caption: "14px",
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
      secondary: Color.gray["400"],
      disabled: Color.gray["700"],
    },
    button: {
      background: {
        default: Color.gray["800"],
        hover: Color.gray["700"],
        active: Color.gray["700"],
      },
    },
    logo: {
      color: {
        basic: Color.white,
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
      secondary: "'Montserrat', sans-serif",
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 500,
    },
    size: {
      h1: "64px",
      h2: "48px",
      h3: "40px",
      h4: "32px",
      h5: "28px",
      h6: "24px",
      body1: "20px",
      body2: "16px",
      caption: "14px",
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
