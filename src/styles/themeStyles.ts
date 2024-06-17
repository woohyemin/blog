import { Color } from "./Color";
import { ThemeStyleType, TypographyType } from "./types/styled";

const TypographyTheme: TypographyType = {
  variant: {
    primary: "'Noto Sans KR', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
  },
  size: {
    h1: "24px",
    h2: "20px",
    h3: "18px",
    h4: "16px",
    h5: "14px",
    h6: "12px",
    body1: "14px",
    body2: "12px",
    caption: "12px",
  },
  defaultStyles: {
    wordBreak: "keep-all",
    lineHeight: "160%",
    letterSpacing: "-0.05em",
  },
};

const BreakPoints = {
  small: 360,
  medium: 640,
  large: 1100,
};

export const lightTheme: ThemeStyleType = {
  palette: {
    background: {
      default: Color.gray["100"],
      primary: Color.beige["100"],
      secondary: "",
      paper: Color.gray["300"],
    },
    primary: {
      light: Color.beige["300"],
      main: Color.beige["600"],
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
        default: Color.gray["150"],
        hover: Color.beige["100"],
        active: Color.beige["150"],
      },
      text: {
        default: Color.gray["800"],
        hover: Color.gray["800"],
        active: Color.beige["600"],
      },
    },
    chip: {
      background: {
        basic: Color.gray["150"],
        primary: Color.beige["150"],
      },
      text: {
        basic: Color.gray["600"],
        primary: Color.beige["600"],
      },
    },
    logo: {
      basic: Color.gray["800"],
    },
    divider: {
      basic: Color.gray["300"],
    },
    dot: {
      basic: Color.gray["400"],
    },
    icon: {
      primary: Color.gray["900"],
      secondary: Color.gray["700"],
    },
  },

  effect: {
    shadow: {
      small: "",
      medium: "",
      large: "",
    },
  },

  typography: TypographyTheme,
};

export const darkTheme: ThemeStyleType = {
  palette: {
    background: {
      default: Color.gray["900"],
      primary: Color.beige["100"],
      secondary: "",
      paper: Color.gray["850"],
    },
    primary: {
      light: Color.beige["300"],
      main: Color.beige["600"],
      dark: Color.beige["700"],
      contrastText: Color.gray["900"],
    },
    gray: {
      light: Color.gray["300"],
      main: Color.gray["500"],
      dark: Color.gray["700"],
    },
    text: {
      primary: Color.gray["50"],
      secondary: Color.gray["400"],
      disabled: Color.gray["600"],
    },
    button: {
      background: {
        default: Color.gray["850"],
        hover: Color.gray["700"],
        active: "#2A241E",
      },
      text: {
        default: Color.gray["50"],
        hover: Color.white,
        active: Color.beige["600"],
      },
    },
    chip: {
      background: {
        basic: Color.gray["800"],
        primary: "#2A241E",
      },
      text: {
        basic: Color.gray["500"],
        primary: Color.beige["600"],
      },
    },
    logo: {
      basic: Color.white,
    },
    divider: {
      basic: Color.gray["800"],
    },
    dot: {
      basic: Color.gray["700"],
    },
    icon: {
      primary: Color.gray["50"],
      secondary: Color.gray["400"],
    },
  },

  effect: {
    shadow: {
      small: "",
      medium: "",
      large: "",
    },
  },

  typography: TypographyTheme,
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
