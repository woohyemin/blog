"use client";

import React, { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { IconType } from "../../data-display/Icon/icons";
import { Icon } from "../../data-display/Icon";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Button size
   */
  size?: "medium";

  /**
   * Button color
   */
  color?: "basic";

  /**
   * start icon
   */
  startIcon?: IconType;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  ${(props) => {
    if (props.size === "medium") {
      return {
        height: "28px",
        padding: "2px 16px",
        borderRadius: "28px",
        fontSize: "12px",
        gap: "8px",
      };
    }
  }};

  ${(props) => {
    if (props.color === "basic") {
      return {
        backgroundColor: props.theme.palette.button.background.default,
        color: props.theme.palette.button.text.default,
      };
    }
  }};
`;

/**
 * Button component
 */
export const Button = ({
  size = "medium",
  color = "basic",
  startIcon,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton size={size} color={color} {...props}>
      {startIcon && <Icon icon={startIcon} size="small" color="secondary" />}
      {children}
    </StyledButton>
  );
};
