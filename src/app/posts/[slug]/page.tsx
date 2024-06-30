import { Dot } from "@/components/atoms/data-display/Dot";
import { Icon } from "@/components/atoms/data-display/Icon";
import { ByHyemin } from "@/components/molecules/ByHyemin";
import Comments from "@/components/organisms/Comments";
import { Header } from "@/components/organisms/Header";
import { PostLayout } from "@/components/templates/layout/PostLayout.tsx";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getPost } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

  const prevPost = post.prevPost ? await getPost(post.prevPost) : null;
  const nextPost = post.nextPost ? await getPost(post.nextPost) : null;

  if (!post) {
    return <div className="bg-red-50 w-5 h-5" />;
  }

  return (
    <TemplateLayout>
      <div className="mb-5 sm:mb-7">
        <Header
          title={
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              {post.title}
            </h1>
          }
          content={
            <div className="flex gap-2 items-center h-6">
              <span className="text-secondary text-caption sm:text-body2">
                {post.date}
              </span>
              <Dot />
              <ByHyemin variant="posts" />
            </div>
          }
        />

        <Image
          className="w-full h-auto rounded-lg object-cover"
          src={`/images/posts/${post.thumbnail}`}
          alt=""
          width={640}
          height={320}
        />
      </div>

      <PostLayout size="medium">{post.content}</PostLayout>

      <div
        className={`flex flex-col gap-4 pt-8 sm:pt-12 sm:flex-row ${!prevPost && "justify-end"}`}
      >
        {prevPost && (
          <Link
            className="flex gap-4 items-center rounded-lg py-4 px-5 bg-basicBtnBg sm:w-[calc(50%-8px)]"
            href={`/posts/${prevPost.path}`}
          >
            <Icon icon="arrowLeft" size="sm" />
            <div className="flex flex-col gap-1 overflow-hidden">
              <span className="text-caption font-medium text-secondary">
                이전 포스트
              </span>
              <span className="text-body2 overflow-hidden whitespace-nowrap text-ellipsis">
                {prevPost.title}
              </span>
            </div>
          </Link>
        )}
        {nextPost && (
          <Link
            className="flex gap-4 items-center rounded-lg py-4 px-5 bg-basicBtnBg justify-end sm:w-[calc(50%-8px)]"
            href={`/posts/${nextPost.path}`}
          >
            <div className="flex flex-col gap-1 overflow-hidden">
              <span className="text-caption font-medium text-secondary text-right">
                다음 포스트
              </span>
              <span className="text-body2 overflow-hidden whitespace-nowrap text-ellipsis">
                {nextPost.title}
              </span>
            </div>
            <Icon icon="arrowRight" size="sm" />
          </Link>
        )}
      </div>

      <Comments />
    </TemplateLayout>
  );
}
