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
export type ButtonColorType = "background" | "text";

/**
 * button state color type
 */
export type ButtonStateType = "default" | "hover" | "active";

/**
 * logo color type
 */
export type LogoColorType = "basic";

/**
 * icon color type
 */
export type IconColorType = "primary" | "secondary";

/**
 * dot color type
 */
export type DotColorType = "basic";

/**
 * divider color type
 */
export type DividerColorType = "basic";

/**
 * chip color type
 */
export type ChipColorType = "background" | "text";

/**
 * chip state color type
 */
export type ChipStateColorType = "basic" | "primary";

/**
 * palette type
 */
export interface PaletteType {
  background: Record<BackgroundColorType, string>;
  primary: Record<PrimaryColorType, string>;
  gray: Record<GrayColorType, string>;
  text: Record<TypographyColorType, string>;
  button: Record<ButtonColorType, Record<ButtonStateType, string>>;
  chip: Record<ChipColorType, Record<ChipStateType, string>>;
  logo: Record<LogoColorType, string>;
  divider: Record<DividerColorType, string>;
  dot: Record<DotColorType, string>;
  icon: Record<IconColorType, string>;
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
export type TypographyWeightType = "light" | "regular" | "medium";

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

/**
 * padding props
 */

export interface PaddingProps {
  p?: CSSProperties["padding"];
  pt?: CSSProperties["paddingTop"];
  pr?: CSSProperties["paddingRight"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
}

/**
 * margin props
 */

export interface MarginProps {
  m?: CSSProperties["margin"];
  mt?: CSSProperties["marginTop"];
  mr?: CSSProperties["marginRight"];
  mb?: CSSProperties["marginBottom"];
  ml?: CSSProperties["marginLeft"];
}

export interface SizeProps {
  w?: CSSProperties["width"];
  h?: CSSProperties["height"];
}

export type CommonStyleProps = PaddingProps & MarginProps & SizeProps;
