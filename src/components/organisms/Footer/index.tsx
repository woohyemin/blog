"use client";

import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";

/**
 * Footer component props
 */
interface FooterProps {
  /**
   * Footer size
   */
  size?: "small" | "medium" | "large";
}

const StyledFooterWrapper = styled(Row)<Omit<FooterProps, "menus">>`
  max-width: 640px;
  width: 100%;
  padding: 16px 40px;
  margin: 0 auto;

  ${(props) => {
    if (props.size === "small") {
      return css`
        height: 48px;
      `;
    } else if (props.size === "medium") {
      return css`
        height: 64px;
      `;
    } else if (props.size === "large") {
      return css`
        height: 80px;
      `;
    }
  }};
`;

/**
 * Footer component
 */
export const Footer = ({ size, ...props }: FooterProps) => {
  const fontSize = useMemo(() => {
    if (size === "small") {
      return "caption";
    } else if (size === "medium") {
      return "caption";
    } else {
      return "caption";
    }
  }, [size]);

  return (
    <StyledFooterWrapper
      $w="100%"
      $justifyContent="space-between"
      $alignItems="center"
      size={size}
      {...props}
    >
      <Typography $size="caption" color="disabled">
        ⓒ Hyemin Woo. All rights reserved.
      </Typography>
      <Row $gap="16px">
        <Box $w="32px" $h="32px" $bgColor="gray" />
        <Box $w="32px" $h="32px" $bgColor="gray" />
      </Row>
    </StyledFooterWrapper>
  );
};
