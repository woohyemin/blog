import "styled-components";

import { CSSProperties } from "react";

/**
 * background color type
 */
export type BackgroundColorType = "default" | "primary" | "secondary" | "paper";

/**
 * primary color type
 */
export type PrimaryColorType = "light" | "main" | "dark" | "contrastText";

/**
 * gray color type
 */
export type GrayColorType = "light" | "main" | "dark";

/**
 * text color type
 */
export type TypographyColorType = "primary" | "secondary" | "disabled";

/**
 * button color type
 */
export type ButtonColorType = "background";

/**
 * button background color type
 */
export type ButtonBackgroundColorType = "default" | "hover" | "active";

/**
 * logo color type
 */
export type LogoColorType = "basic";

/**
 * palette type
 */
export interface PaletteType {
  background: Record<BackgroundColorType, string>;
  primary: Record<PrimaryColorType, string>;
  gray: Record<GrayColorType, string>;
  text: Record<TypographyColorType, string>;
  button: Record<ButtonColorType, Record<ButtonBackgroundColorType, string>>;
  logo: Record<LogoColorType, string>;
}

/**
 * shadow effect type
 */
export type ShadowEffectType = "small" | "medium" | "large";

/**
 * effect type
 */
export interface EffectType {
  shadow: Record<ShadowEffectType, string>;
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
