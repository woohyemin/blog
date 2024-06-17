"use client";

import { MarginProps, PaddingProps, SizeProps } from "@/styles/types/styled";
import React, { CSSProperties, HTMLAttributes } from "react";
import styled from "styled-components";

interface StyleProps {
  borderRadius?: CSSProperties["borderRadius"];
}

type LayoutProps = HTMLAttributes<HTMLDivElement> &
  PaddingProps &
  MarginProps &
  SizeProps &
  StyleProps;

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
  border-radius: ${(props) => props.borderRadius};
`;

/**
 * Box component
 */
export const Box = ({ ...props }: BoxProps) => {
  return <StyledDiv {...props} />;
};
