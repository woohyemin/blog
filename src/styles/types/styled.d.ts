import "styled-components";

import { CSSProperties } from "react";

/**
 * text color type
 */
export type TypographyColorType = "primary" | "secondary" | "disabled";

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
  text: Record<TypographyColorType, string>;
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
 * typography variant type
 */
export type TypographyVariantType = "primary" | "secondary";

/**
 * typography weight type
 */
export type TypographyWeightType = "light" | "regular" | "bold";

/**
 * typography size type
 */
export type TypographySizeType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption";

/**
 * typography type
 */
export interface TypographyType {
  variant: Record<TypographyVariantType, string>;
  weight: Record<TypographyWeightType, CSSProperties["fontWeight"]>;
  size: Record<TypographySizeType, CSSProperties["fontSize"]>;
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

declare module "styled-components" {
  export interface DefaultTheme extends ThemeStyleType {}
}
