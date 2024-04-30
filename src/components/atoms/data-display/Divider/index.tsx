"use client";

import React from "react";
import styled from "styled-components";

/**
 * Divider component props
 */
export interface DividerProps {
  color?: "basic";
}

const StyledDiv = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ color, theme }) =>
    color === "basic"
      ? theme.palette.divider.basic
      : theme.palette.divider.basic};
`;

/**
 * Divider component
 */
export const Divider = ({ color = "basic", ...props }: DividerProps) => {
  return <StyledDiv color="basic" {...props} />;
};
