"use client";

import {
  TypographyColorType,
  TypographySizeType,
  TypographyVariantType,
  TypographyWeightType,
} from "@/styles/types/styled";
import { Montserrat, Noto_Sans_KR } from "next/font/google";
import React, { CSSProperties, HTMLAttributes } from "react";
import styled, { useTheme } from "styled-components";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  //   weight: ["300", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  //   weight: ["300", "500", "700"],
});

/**
 * Typography component level type
 */
type TypographyComponentLevelType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p";

/**
 * Typography component props
 */
export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TypographyVariantType;
  size?: TypographySizeType;
  weight?: TypographyWeightType;
  color?: TypographyColorType;
  component?: TypographyComponentLevelType;
  textAlign?: CSSProperties["textAlign"];
}

/**
 * Typography component
 */
export const Typography = ({
  variant = "primary",
  component = "span",
  ...props
}: TypographyProps) => {
  const theme = useTheme();

  const font = variant === "primary" ? noto_sans_kr : montserrat;

  const Component = component;
  const StyledComponent = styled(Component)<TypographyProps>`
    font-size: ${({ size, theme }) => theme.typography.size[size || "body2"]};
    font-weight: ${({ weight, theme }) =>
      theme.typography.weight[weight || "regular"]};
    color: ${({ color, theme }) => theme.palette.text[color || "primary"]};
  `;

  return (
    <StyledComponent
      className={font.className}
      style={{ ...theme.typography.defaultStyles }}
      {...props}
    />
  );
};
