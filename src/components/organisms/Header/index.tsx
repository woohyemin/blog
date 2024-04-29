"use client";

import { Logo } from "@/components/atoms/Logo";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import React, { useMemo } from "react";
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
   * header size
   */
  menus: MenuType[];

  /**
   * header size
   */
  size?: "small" | "medium" | "large";
}

const StyledHeaderWrapper = styled(Row)<Omit<HeaderProps, "menus">>`
  width: 100%;
  padding: 16px 40px;

  ${(props) => {
    if (props.size === "small") {
      return css`
        height: 56px;
      `;
    } else if (props.size === "medium") {
      return css`
        height: 80px;
      `;
    } else if (props.size === "large") {
      return css`
        height: 120px;
      `;
    }
  }};
`;

/**
 * header component
 */
export const Header = ({ menus, size, ...props }: HeaderProps) => {
  const menuFontSize = useMemo(() => {
    if (size === "small") {
      return "caption";
    } else if (size === "medium") {
      return "body2";
    } else {
      return "body1";
    }
  }, [size]);

  return (
    <StyledHeaderWrapper
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      size={size}
      {...props}
    >
      <Logo size="medium" />
      <Row gap="48px" alignItems="center">
        <ThemeToggle />
        {menus.map((menu) => (
          <Typography
            key={menu.value}
            variant="secondary"
            size={menuFontSize}
            weight="bold"
          >
            {menu.label}
          </Typography>
        ))}
      </Row>
    </StyledHeaderWrapper>
  );
};

Header.defaultProps = {
  menus: [],
  size: "medium",
} as HeaderProps;
