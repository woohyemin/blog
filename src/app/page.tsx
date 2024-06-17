"use client";

import { Dot } from "@/components/atoms/data-display/Dot";
import { Icon } from "@/components/atoms/data-display/Icon";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Button } from "@/components/atoms/inputs/Button";
import { Box } from "@/components/atoms/layout/Box";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import { Header } from "@/components/organisms/Header";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import Link from "next/link";
import styled from "styled-components";

const MenuLink = styled(Link)`
  text-decoration: none;
`;

export default function Home() {
  return (
    <TemplateLayout size="medium">
      <Column gap="48px" pt="15vh">
        <Column gap="24px">
          <Header
            title={
              <Row gap="8px" alignItems="center">
                <Typography
                  size="h2"
                  component="h1"
                  color="primary"
                  weight="medium"
                >
                  우혜민
                </Typography>
                <Dot />
                <Typography
                  size="h3"
                  component="h1"
                  variant="secondary"
                  color="primary"
                  weight="medium"
                >
                  hyemin woo
                </Typography>
              </Row>
            }
          />
          <Typography size="h5" component="p" color="secondary">
            더 나은 UI/UX를 고민하며 개발하는 웹 프론트엔드 개발자 우혜민입니다.
            <br />
            떠오른 아이디어를 가지고 스스로 구상하고 개발하는 것을 좋아하고
            경험한 것들을 기록하고 있습니다.
          </Typography>
        </Column>
        <Row gap="8px">
          <MenuLink href={`/posts`}>
            <Button startIcon="filledDocument">Posts</Button>
          </MenuLink>
          <Button startIcon="GitHub">GitHub</Button>
          <Button startIcon="filledMail">Email</Button>
        </Row>
      </Column>
    </TemplateLayout>
  );
}
