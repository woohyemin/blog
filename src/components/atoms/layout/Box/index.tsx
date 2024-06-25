"use client";

import { MarginProps, PaddingProps, SizeProps } from "@/styles/types/styled";
import React, { CSSProperties, HTMLAttributes } from "react";
import styled from "styled-components";

interface StyleProps {
  $display?: CSSProperties["display"];
  $flexDirection?: CSSProperties["flexDirection"];
  $gap?: CSSProperties["gap"];
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $borderRadius?: CSSProperties["borderRadius"];
  $bgColor?: CSSProperties["backgroundColor"];
}

type LayoutProps = PaddingProps & MarginProps & SizeProps & StyleProps;

/**
 * Box component props
 */
export type BoxProps = HTMLAttributes<HTMLDivElement> & LayoutProps;

const StyledDiv = styled.div<BoxProps>`
  width: ${(props) => props.$w};
  height: ${(props) => props.$h};
  padding: ${(props) => props.$p};
  padding-top: ${(props) => props.$pt};
  padding-right: ${(props) => props.$pr};
  padding-bottom: ${(props) => props.$pb};
  padding-left: ${(props) => props.$pl};
  margin: ${(props) => props.$m};
  margin-top: ${(props) => props.$mt};
  margin-right: ${(props) => props.$mr};
  margin-bottom: ${(props) => props.$mb};
  margin-left: ${(props) => props.$ml};
  display: ${(props) => props.$display};
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  border-radius: ${(props) => props.$borderRadius};
  background-color: ${(props) => props.$bgColor};
`;

/**
 * Box component
 */
export const Box = ({ ...props }: BoxProps) => {
  return <StyledDiv {...props} />;
};
