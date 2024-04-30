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
      light: Color.indigo["300"],
      main: Color.indigo["500"],
      dark: Color.indigo["700"],
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
        default: Color.gray["150"],
        hover: Color.indigo["100"],
        active: Color.indigo["100"],
      },
      text: {
        default: Color.gray["600"],
        hover: Color.gray["800"],
        active: Color.indigo["500"],
      },
    },
    logo: {
      basic: Color.gray["800"],
    },
    divider: {
      basic: Color.gray["300"],
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
      bold: 600,
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
      light: Color.indigo["300"],
      main: Color.indigo["500"],
      dark: Color.indigo["700"],
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
        active: "#1A2437",
      },
      text: {
        default: Color.gray["500"],
        hover: Color.white,
        active: Color.indigo["400"],
      },
    },
    logo: {
      basic: Color.white,
    },
    divider: {
      basic: Color.gray["800"],
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
      bold: 600,
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
