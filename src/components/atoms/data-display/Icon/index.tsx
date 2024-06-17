"use client";

import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { IconType, icons } from "./icons";

interface IconProps {
  /**
   * Icon
   */
  icon: IconType;

  /**
   * Icon size
   */
  size?: "small" | "medium";

  /**
   * Icon color
   */
  color?: "primary" | "secondary";
}

const StyledIcon = styled.svg<Omit<IconProps, "icon">>`
  ${(props) => {
    if (props.size === "small") {
      return {
        width: "14px",
        height: "14px",
      };
    } else if (props.size === "medium") {
      return {
        width: "18px",
        height: "18px",
      };
    }
  }};

  ${(props) => {
    if (props.color === "primary") {
      return {
        color: props.theme.palette.icon.primary,
      };
    } else if (props.color === "secondary") {
      return {
        color: props.theme.palette.icon.secondary,
      };
    }
  }};
`;

/**
 * Icon component
 */
export const Icon = ({
  icon,
  size = "medium",
  color = "primary",
  ...props
}: PropsWithChildren<IconProps>) => {
  return (
    <StyledIcon viewBox="0 0 120 120" size={size} color={color} {...props}>
      {icons[icon]}
    </StyledIcon>
  );
};
