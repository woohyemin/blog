"use client";

import React from "react";
import styled, { useTheme } from "styled-components";

interface ChipProps {
  /**
   * chip label
   */
  label: string;

  /**
   * chip size
   */
  size?: "small" | "medium" | "large";

  /**
   * chip color
   */
  color?: "basic" | "primary";
}

const StyledChip = styled.div<Omit<ChipProps, "label">>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.weight.medium};

  ${(props) => {
    if (props.size === "small") {
      return {
        height: "24px",
        padding: "0 12px",
        borderRadius: "6px",
        fontSize: "12px",
      };
    } else if (props.size === "medium") {
      return {
        height: "32px",
        padding: "0 16px",
        borderRadius: "8px",
        fontSize: "14px",
      };
    } else if (props.size === "large") {
      return {
        height: "48px",
        padding: "0 24px",
        borderRadius: "10px",
        fontSize: "16px",
      };
    }
  }};

  ${(props) => {
    if (props.color === "basic") {
      return {
        backgroundColor: props.theme.palette.button.background.default,
        color: props.theme.palette.button.text.default,
      };
    } else if (props.color === "primary") {
      return {
        backgroundColor: props.theme.palette.button.background.active,
        color: props.theme.palette.button.text.active,
      };
    }
  }};
`;

/**
 * Chip component
 */
export const Chip = ({
  label,
  size = "medium",
  color = "basic",
  ...props
}: ChipProps) => {
  const theme = useTheme();

  return (
    <StyledChip size={size} color={color} {...props}>
      {label}
    </StyledChip>
  );
};
