"use client";

import React, { useEffect } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface TabProps {
  /**
   * tab label
   */
  label: string;

  /**
   * tab style type
   */
  variant?: "button";

  /**
   * tab size
   */
  size?: "small" | "medium" | "large";

  /**
   * tab color
   */
  color?: "basic";

  /**
   * tab active
   */
  isActivated?: boolean;

  /**
   * tab click handler
   */
  onClick?: () => void;
}

const StyledTab = styled.button<Omit<TabProps, "label">>`
  border: none;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  width: fit-content;

  ${(props) => {
    if (props.size === "small") {
      return {
        height: "32px",
        padding: "0 16px",
        borderRadius: "32px",
        fontSize: "14px",
      };
    } else if (props.size === "medium") {
      return {
        height: "48px",
        padding: "0 24px",
        borderRadius: "48px",
        fontSize: "16px",
      };
    } else if (props.size === "large") {
      return {
        height: "56px",
        padding: "0 32px",
        borderRadius: "56px",
        fontSize: "20px",
      };
    }
  }};

  ${(props) => {
    // console.log(
    //   "button background",
    //   props.theme.palette.button.background.default
    // );

    if (props.color === "basic") {
      if (props.isActivated) {
        return {
          backgroundColor: props.theme.palette.button.background.active,
          color: props.theme.palette.button.text.active,
          ":hover": {
            backgroundColor: props.theme.palette.button.background.active,
          },
        };
      }

      return {
        backgroundColor: props.theme.palette.button.background.default,
        color: props.theme.palette.button.text.default,
        ":hover": {
          backgroundColor: props.theme.palette.button.background.hover,
          color: props.theme.palette.button.text.hover,
        },
      };
    }
  }};

  // color: ${(props) => props.theme.palette.button.background.active};
`;

/**
 * tab component
 */
export const Tab = ({
  label,
  variant = "button",
  size = "medium",
  color = "basic",
  isActivated,
  onClick,
  ...props
}: TabProps) => {
  const theme = useTheme();

  return (
    <StyledTab
      type="button"
      variant={variant}
      size={size}
      color={color}
      isActivated={isActivated}
      onClick={onClick}
      theme={theme}
      {...props}
    >
      {label}
    </StyledTab>
  );
};
