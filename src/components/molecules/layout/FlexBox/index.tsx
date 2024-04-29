"use client";

import { Box, BoxProps } from "@/components/atoms/layout/Box";
import React, { CSSProperties, HTMLAttributes } from "react";
import styled from "styled-components";

/**
 * FlexBox component props
 */
export interface FlexBoxProps extends BoxProps {
  direction: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
}

const StyledBox = styled(Box)<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

/**
 * FlexBox component
 */
export const FlexBox = ({ ...props }: FlexBoxProps) => {
  return <StyledBox {...props} />;
};
