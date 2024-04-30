"use client";

import { Tab } from "@/components/atoms/Tab";
import { Divider } from "@/components/atoms/data-display/Divider";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";

export default function Projects() {
  return (
    <TemplateLayout size="medium">
      <Column gap="80px">
        <Typography size="h2" component="h1" weight="bold">
          개발하거나 공부한 내용을 여기에 정리하고 있어요
        </Typography>

        <Column gap="48px">
          <Row gap="16px">
            <Tab label="포스트" size="large" isActivated />
            <Tab label="시리즈" size="large" />
          </Row>

          <Column gap="40px">
            <Row gap="40px">
              <Column
                gap="20px"
                justifyContent="space-between"
                style={{ flex: 1 }}
              >
                <Column gap="24px">
                  <Column gap="12px">
                    <Typography size="h5" component="h2" weight="bold">
                      나만의 기술 블로그를 만들어보자!
                    </Typography>
                    <Typography size="body2" component="h3" color="secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer leo erat, bibendum vel rhoncus et, mattis in
                      neque. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Integer leo erat, bibendum v...
                    </Typography>
                  </Column>
                  <Row gap="8px">
                    <Box
                      bgColor="lightgray"
                      w="80px"
                      h="32px"
                      borderRadius="8px"
                    />
                    <Box
                      bgColor="lightgray"
                      w="80px"
                      h="32px"
                      borderRadius="8px"
                    />
                    <Box
                      bgColor="lightgray"
                      w="80px"
                      h="32px"
                      borderRadius="8px"
                    />
                  </Row>
                </Column>

                <Typography size="caption" component="h3" color="disabled">
                  YYYY.MM.DD
                </Typography>
              </Column>

              <Box
                bgColor="lightgray"
                w="360px"
                h="220px"
                borderRadius="20px"
              />
            </Row>

            <Divider />

            <Row gap="40px">
              <Column
                gap="20px"
                justifyContent="space-between"
                style={{ flex: 1 }}
              >
                <Column gap="24px">
                  <Column gap="12px">
                    <Typography size="h5" component="h2" weight="bold">
                      나만의 디자인 시스템을 만들어보자!
                    </Typography>
                    <Typography size="body2" component="h3" color="secondary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </Column>
                  <Row gap="8px">
                    <Box
                      bgColor="lightgray"
                      w="80px"
                      h="32px"
                      borderRadius="8px"
                    />
                    <Box
                      bgColor="lightgray"
                      w="80px"
                      h="32px"
                      borderRadius="8px"
                    />
                    <Box
                      bgColor="lightgray"
                      w="80px"
                      h="32px"
                      borderRadius="8px"
                    />
                  </Row>
                </Column>

                <Typography size="caption" component="h3" color="disabled">
                  YYYY.MM.DD
                </Typography>
              </Column>

              <Box
                bgColor="lightgray"
                w="360px"
                h="220px"
                borderRadius="20px"
              />
            </Row>
          </Column>

          {/* <Row gap="24px" style={{ flexWrap: "wrap" }}>
            <Column
              bgColor="lightgray"
              w="360px"
              h="420px"
              borderRadius="24px"
              style={{ overflow: "hidden" }}
            >
              <Box bgColor="gray" w="100%" h="200px" />
              <Column gap="16px" p="16px 24px">
                <Typography size="h5" component="h3" weight="bold">
                  포스트 제목
                </Typography>
                <Typography size="body2" component="h4" color="secondary">
                  포스트 설명 영역입니다.
                </Typography>
              </Column>
            </Column>
            <Box bgColor="lightgray" w="360px" h="420px" borderRadius="24px" />
            <Box bgColor="lightgray" w="360px" h="420px" borderRadius="24px" />
            <Box bgColor="lightgray" w="360px" h="420px" borderRadius="24px" />
            <Box bgColor="lightgray" w="360px" h="420px" borderRadius="24px" />
            <Box bgColor="lightgray" w="360px" h="420px" borderRadius="24px" />
          </Row> */}
        </Column>
      </Column>
    </TemplateLayout>
  );
}
