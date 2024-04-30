"use client";

import { Tab } from "@/components/atoms/Tab";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";

export default function AboutMe() {
  return (
    <TemplateLayout size="medium">
      <Column gap="80px">
        <Column gap="16px">
          <Typography size="h2" component="h1" weight="bold">
            반가워요! 저는 프론트엔드 개발자예요
          </Typography>
          <Typography size="body1" component="h2" color="secondary">
            안녕하세요. 더 나은 UI/UX를 고민하는 웹 프론트엔드 개발자 hem이라고
            해요.
          </Typography>
        </Column>
        <Column gap="64px">
          <Column gap="24px">
            <Typography size="h4" component="h3" weight="bold">
              프론트엔드
            </Typography>
            <Row gap="16px">
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
            </Row>
          </Column>
          <Column gap="24px">
            <Typography size="h4" component="h3" weight="bold">
              협업 툴
            </Typography>
            <Row gap="16px">
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
            </Row>
          </Column>
          <Column gap="24px">
            <Typography size="h4" component="h3" weight="bold">
              기타
            </Typography>
            <Row gap="16px">
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
              <Box
                bgColor="lightgray"
                w="120px"
                h="120px"
                borderRadius="24px"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </TemplateLayout>
  );
}
