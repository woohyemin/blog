"use client";

import ThemeToggle from "@/components/atoms/ThemeToggle";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import React, { ReactNode, useMemo } from "react";
import styled, { css } from "styled-components";

export type MenuType = {
  label: string;
  value: string;
};

/**
 * header component props
 */
interface HeaderProps {
  /**
   * header title
   */
  title: ReactNode;

  /**
   * header size
   */
  size?: "small" | "medium" | "large";
}

const StyledHeaderWrapper = styled(Row)<Omit<HeaderProps, "title">>`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`;

/**
 * header component
 */
export const Header = ({ title, size, ...props }: HeaderProps) => {
  return (
    <StyledHeaderWrapper
      justifyContent="space-between"
      alignItems="center"
      size={size}
      {...props}
    >
      {title}
      <Row gap="8px" alignItems="center">
        <ThemeToggle />
        {/* <Box w="32px" h="32px" bgColor="#DDD" /> */}
      </Row>
    </StyledHeaderWrapper>
  );
};

Header.defaultProps = {
  title: "Title",
  size: "medium",
} as HeaderProps;
