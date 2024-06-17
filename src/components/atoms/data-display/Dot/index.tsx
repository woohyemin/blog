"use client";

import React from "react";
import styled from "styled-components";

/**
 * Dot component props
 */
export interface DotProps {
  color?: "basic";
}

const StyledDiv = styled.div<DotProps>`
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background-color: ${({ color, theme }) =>
    color === "basic" ? theme.palette.dot.basic : theme.palette.dot.basic};
`;

/**
 * Dot component
 */
export const Dot = ({ color = "basic", ...props }: DotProps) => {
  return <StyledDiv color="basic" {...props} />;
};
