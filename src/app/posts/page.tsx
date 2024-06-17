import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { ByHyemin } from "@/components/molecules/ByHyemin";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import { Header } from "@/components/organisms/Header";
import { Posts } from "@/components/organisms/Posts";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getAllPosts } from "@/lib/api";

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
      <Header
        title={
          <Row gap="12px" alignItems="end">
            <Typography size="h2" component="h1" weight="medium">
              포스트
            </Typography>
            <ByHyemin />
          </Row>
        }
        content={
          <Typography size="body1" color="secondary" h="24px">
            개발하고 공부한 내용들을 기록하고 있습니다.
          </Typography>
        }
      />

      <Posts posts={allPosts} />
    </TemplateLayout>
  );
}
