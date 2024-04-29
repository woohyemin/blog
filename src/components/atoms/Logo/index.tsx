"use client";

import React from "react";
import { logos } from "./logos";
import styled, { css } from "styled-components";

interface LogoProps {
  /**
   * logo style type
   */
  variant?: "typo";

  /**
   * logo size
   */
  size?: "small" | "medium" | "large";

  /**
   * logo color
   */
  color?: "basic";
}

const StyledLogoWrapper = styled.div<LogoProps>`
  ${(props) => {
    if (props.size === "small") {
      return css`
        svg {
          width: 140px;
        }
      `;
    } else if (props.size === "medium") {
      return css`
        svg {
          width: 280px;
          height: 52px;
        }
      `;
    } else if (props.size === "large") {
      return css`
        svg {
          width: 646px;
          height: 120px;
        }
      `;
    }
  }};
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
