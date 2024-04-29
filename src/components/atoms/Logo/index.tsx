"use client";

import React, { CSSProperties } from "react";
import { logos } from "./logos";
import styled, { css } from "styled-components";

/**
 * logo component props
 */
interface LogoProps {
  /**
   * logo style type
   */
  variant?: "typo";

  /**
   * logo size
   */
  size?:
    | "extraSmall"
    | "small"
    | "medium"
    | "large"
    | "extraLarge"
    | CSSProperties["width"];

  /**
   * logo color
   */
  color?: "basic";
}

const StyledLogoWrapper = styled.div<LogoProps>`
  svg {
    ${(props) => {
      if (props.size === "extraSmall") {
        return css`
          width: 48px;
        `;
      } else if (props.size === "small") {
        return css`
          width: 70px;
        `;
      } else if (props.size === "medium") {
        return css`
          width: 106px;
        `;
      } else if (props.size === "large") {
        return css`
          width: 560px;
        `;
      } else if (props.size === "extraLarge") {
        return css`
          width: 646px;
        `;
      } else {
        return css`
          width: ${props.size};
        `;
      }
    }};
  }

  color: ${(props) => {
    if (props.color === "basic") return props.theme.palette.logo.color.basic;
  }};
`;

/**
 * logo component
 */
export const Logo = ({ ...props }: LogoProps) => {
  return <StyledLogoWrapper {...props}>{logos.typo}</StyledLogoWrapper>;
};

Logo.defaultProps = {
  variant: "typo",
  size: "medium",
  color: "basic",
} as LogoProps;
