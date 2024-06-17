import { Divider } from "@/components/atoms/data-display/Divider";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { ByHyemin } from "@/components/molecules/ByHyemin";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import { Header } from "@/components/organisms/Header";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
  const allPosts = await getAllPosts();

  if (!allPosts) {
    return (
      <Column justifyContent="center">
        <Box bgColor="red" w="40px" h="40px" />
      </Column>
    );
  }

  return (
    <TemplateLayout size="medium">
      <Column gap="32px">
        <Column gap="8px">
          <Header
            title={
              <Row gap="12px" alignItems="end">
                <Typography size="h2" component="h1" weight="medium">
                  포스트
                </Typography>
                <ByHyemin />
              </Row>
            }
          />
          <Typography size="body1" color="secondary" h="24px">
            개발하고 공부한 내용들을 기록하고 있습니다.
          </Typography>
        </Column>

        <Column gap="32px">
          {allPosts.map((el, index) => (
            <Column key={el.description} gap="32px">
              <Link
                href={`posts/${el.path}`}
                style={{ textDecoration: "none" }}
              >
                <Column w="100%">
                  <Image
                    src={`/images/thumbnails/${el.thumbnail}`}
                    alt=""
                    width={640}
                    height={280}
                    style={{
                      width: "100%",
                      height: "280px",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />

                  <Typography
                    size="h4"
                    component="h3"
                    weight="medium"
                    pt="16px"
                  >
                    {el.title}
                  </Typography>
                  <Typography
                    size="body2"
                    component="h4"
                    color="secondary"
                    pt="8px"
                  >
                    {el.description}
                  </Typography>

                  {/* <Row gap="4px" pt="16px">
                    <Row p="2px 8px" borderRadius="4px" bgColor="lightGray">
                      <Typography size="body2">React</Typography>
                    </Row>
                    <Row p="2px 8px" borderRadius="4px" bgColor="lightGray">
                      <Typography size="body2">Next.js</Typography>
                    </Row>
                    <Row p="2px 8px" borderRadius="4px" bgColor="lightGray">
                      <Typography size="body2">Typescript</Typography>
                    </Row>
                  </Row> */}

                  <Typography size="caption" color="disabled" pt="20px">
                    {el.date}
                  </Typography>
                </Column>
              </Link>
              {index < allPosts.length - 1 && <Divider />}
            </Column>
          ))}
        </Column>
      </Column>
    </TemplateLayout>
  );
}
