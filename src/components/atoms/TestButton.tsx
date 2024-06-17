"use client";

import React, { useEffect } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface TestButtonProps {
  /**
   * TestButton label
   */
  label: string;

  /**
   * TestButton style type
   */
  variant?: "button";

  /**
   * TestButton size
   */
  size?: "small" | "medium" | "large";

  /**
   * TestButton color
   */
  color?: "basic";

  /**
   * TestButton active
   */
  isActivated?: boolean;

  /**
   * TestButton click handler
   */
  onClick?: () => void;
}

const TestStyledButton = styled.button<Omit<TestButtonProps, "label">>`
  border: none;
  font-weight: ${(props) => props.theme.typography.weight.medium};
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

    console.log("theme", props.theme.palette.button.background.default);

    if (props.color === "basic") {
      if (props.isActivated) {
        return {
          backgroundColor: props.theme.palette.button.background.active,
          color: props.theme.palette.primary.main,
          ":hover": {
            backgroundColor: props.theme.palette.button.background.active,
          },
        };
      }

      return {
        backgroundColor: props.theme.palette.button.background.default,
        color: props.theme.palette.text.secondary,
        ":hover": {
          backgroundColor: props.theme.palette.button.background.hover,
        },
      };
    }
  }};

  // color: ${(props) => props.theme.palette.button.background.active};
`;

/**
 * TestButton component
 */
export const TestButton = ({
  label,
  variant = "button",
  size = "medium",
  color = "basic",
  isActivated,
  onClick,
  // ...props
}: TestButtonProps) => {
  const theme = useTheme();

  return (
    <TestStyledButton
      type="button"
      variant={variant}
      size={size}
      color={color}
      isActivated={isActivated}
      onClick={onClick}
      style={{ backgroundColor: theme.palette.button.background.default }}
      // {...props}
    >
      {label}
    </TestStyledButton>
  );
};
