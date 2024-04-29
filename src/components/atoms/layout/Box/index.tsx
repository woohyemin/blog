"use client";

import React, { CSSProperties, HTMLAttributes } from "react";
import styled from "styled-components";

/**
 * Box component props
 */
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bgColor?: CSSProperties["backgroundColor"];
}

const StyledDiv = styled.div<BoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
`;

/**
 * Box component
 */
export const Box = ({ ...props }: BoxProps) => {
  return <StyledDiv {...props} />;
};
