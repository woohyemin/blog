import { CSSProperties } from "react";

/**
 * palette type
 */
export interface PaletteType {
  background: {
    default: string;
    primary: string;
    secondary: string;
    paper: string;
  };
  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  // secondary?: {
  //   light: string;
  //   main: string;
  //   dark: string;
  //   contrastText: string;
  // };
  gray: {
    light: string;
    main: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  button: {
    background: {
      default: string;
      hover: string;
      active: string;
    };
  };
  logo: {
    color: {
      basic: string;
    };
  };
}

/**
 * effect type
 */
export interface EffectType {
  shadow: {
    small: string;
    medium: string;
    large: string;
  };
}

/**
 * typography type
 */
export interface TypographyType {
  variant: {
    primary: string;
    secondary: string;
  };
  weight: {
    light: number;
    regular: number;
    bold: number;
  };
  size: {
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    h4: CSSProperties;
    h5: CSSProperties;
    h6: CSSProperties;
    body1: CSSProperties;
    body2: CSSProperties;
    caption: CSSProperties;
  };
  defaultStyles: CSSProperties;
}

/**
 * theme style type
 */
export interface ThemeStyleType {
  palette: PaletteType;
  effect: EffectType;
  typography: TypographyType;
}
