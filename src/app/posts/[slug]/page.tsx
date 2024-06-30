import { Dot } from "@/components/atoms/data-display/Dot";
import { ByHyemin } from "@/components/molecules/ByHyemin";
import Comments from "@/components/organisms/Comments";
import { Header } from "@/components/organisms/Header";
import { PostLayout } from "@/components/templates/layout/PostLayout.tsx";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getPost } from "@/lib/api";
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
    return <div className="bg-red-50 w-5 h-5" />;
  }

  return (
    <TemplateLayout>
      <div className="mb-5 sm:mb-7">
        <Header
          title={
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              {title}
            </h1>
          }
          content={
            <div className="flex gap-2 items-center h-6">
              <span className="text-secondary text-caption sm:text-body2">
                {date}
              </span>
              <Dot />
              <ByHyemin variant="blog" />
            </div>
          }
        />

        <Image
          className="w-full h-auto rounded-lg object-cover"
          src={`/images/posts/${thumbnail}`}
          alt=""
          width={640}
          height={320}
        />
      </div>

      <PostLayout size="medium">{content}</PostLayout>

      <Comments />
    </TemplateLayout>
  );
}
