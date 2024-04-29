"use client";

import React, { CSSProperties, HTMLAttributes } from "react";
import styled from "styled-components";

/**
 * padding props
 */

interface PaddingProps {
  p?: CSSProperties["padding"];
  pt?: CSSProperties["paddingTop"];
  pr?: CSSProperties["paddingRight"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
}

/**
 * margin props
 */

interface MarginProps {
  m?: CSSProperties["margin"];
  mt?: CSSProperties["marginTop"];
  mr?: CSSProperties["marginRight"];
  mb?: CSSProperties["marginBottom"];
  ml?: CSSProperties["marginLeft"];
}

interface SizeProps {
  w?: CSSProperties["width"];
  h?: CSSProperties["height"];
}

type LayoutProps = HTMLAttributes<HTMLDivElement> &
  PaddingProps &
  MarginProps &
  SizeProps;

/**
 * Box component props
 */
export interface BoxProps extends LayoutProps {
  bgColor?: CSSProperties["backgroundColor"];
}

const StyledDiv = styled.div<BoxProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  background-color: ${(props) => props.bgColor};
`;

/**
 * Box component
 */
export const Box = ({ ...props }: BoxProps) => {
  return <StyledDiv {...props} />;
};
