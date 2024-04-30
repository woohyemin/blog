"use client";

import { Logo } from "@/components/atoms/Logo";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

const MenuLink = styled(Link)`
  text-decoration: none;
`;

/**
 * header component
 */
export const Header = ({ menus, size, ...props }: HeaderProps) => {
  const router = useRouter();

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
      <MenuLink href="/">
        <Logo size="medium" />
      </MenuLink>

      <Row gap="48px" alignItems="center">
        <ThemeToggle />
        {menus.map((menu) => (
          <MenuLink key={menu.value} href={`/${menu.value}`}>
            <Typography variant="secondary" size={menuFontSize} weight="bold">
              {menu.label}
            </Typography>
          </MenuLink>
        ))}
      </Row>
    </StyledHeaderWrapper>
  );
};

Header.defaultProps = {
  menus: [],
  size: "medium",
} as HeaderProps;
