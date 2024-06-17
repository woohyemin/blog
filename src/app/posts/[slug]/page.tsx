import { Dot } from "@/components/atoms/data-display/Dot";
import { Typography } from "@/components/atoms/data-display/Typography";
import { Box } from "@/components/atoms/layout/Box";
import { ByHyemin } from "@/components/molecules/ByHyemin";
import { Column } from "@/components/molecules/layout/FlexBox/Column";
import { Row } from "@/components/molecules/layout/FlexBox/Row";
import { Header } from "@/components/organisms/Header";
import { PostLayout } from "@/components/templates/layout/PostLayout.tsx";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getFeaturedPosts, getPost } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPost(slug);

  return {
    title,
    description,
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);

  const { title, date, content, thumbnail } = post;

  if (!post) {
    return (
      <Column justifyContent="center">
        <Box bgColor="red" w="40px" h="40px" />
      </Column>
    );
  }

  return (
    <TemplateLayout size="medium">
      <Column mb="8px">
        <Header
          title={
            <Typography size="h2" color="primary" weight="medium">
              {title}
            </Typography>
          }
          content={
            <Row gap="8px" alignItems="center" h="24px">
              <Typography size="h6" color="secondary">
                {date}
              </Typography>
              <Dot />
              <ByHyemin variant="blog" />
            </Row>
          }
        />

        <Image
          src={`/images/thumbnails/${thumbnail}`}
          alt=""
          width={640}
          height={280}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </Column>

      <PostLayout size="medium">{content}</PostLayout>
    </TemplateLayout>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
