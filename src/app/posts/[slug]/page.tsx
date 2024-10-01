import Dot from "@/components/atoms/dot";
import ByHem from "@/components/molecules/by-hem";
import Comments from "@/components/organisms/comments";
import Header from "@/components/organisms/header";
import TemplateLayout from "@/components/templates/layout/template-layout";
import { getPost, getPrevNextPost } from "@/api/posts";
import { Metadata } from "next";
import Image from "next/image";
import Chip from "@/components/atoms/chip";
import PrevNextPosts from "@/components/organisms/prev-next-posts";
import { notFound } from "next/navigation";
import MDXTemplate from "@/components/templates/mdx-template";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata | undefined> {
  const post = await getPost(slug);

  if (post === "not-found") return undefined;

  const imagePaths = post.path.split("-");

  return {
    metadataBase: new URL("https://blog-woohyemins-projects.vercel.app"),
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: `/images/posts/${imagePaths.join("/")}/${imagePaths.join(
            "_"
          )}_thumbnail.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `/images/posts/${imagePaths.join("/")}/${imagePaths.join(
            "_"
          )}_thumbnail.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const prevNextPost = await getPrevNextPost(slug);

  if (!post || post === "not-found") {
    notFound();
  }

  return (
    <TemplateLayout>
      <div className="mb-3 sm:mb-5">
        <Header
          title={
            <h1 className="text-primary text-h3 font-medium inline sm:text-h2">
              {post.title}
            </h1>
          }
          content={
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center h-6">
                <span className="text-secondary text-caption sm:text-body2">
                  {post.date}
                </span>
                <Dot />
                <ByHem variant="posts" />
              </div>
              <div className="flex flex-wrap gap-1 pt-2.5 pb-1.5 sm:py-3.5 sm:pb-2.5 sm:gap-1.5">
                {post.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          }
        />

        {post.thumbnail && (
          <Image
            className="w-full rounded-xl object-cover mt-2 mb-4 sm:mt-2 sm:mb-12"
            src={`/images/posts/${post.thumbnail}`}
            alt={`${post.title} 섬네일`}
            width={1080}
            height={640}
          />
        )}
      </div>

      <MDXTemplate {...post.source} />

      {prevNextPost !== "not-found" && (
        <PrevNextPosts
          prevPost={prevNextPost.prevPost}
          nextPost={prevNextPost.nextPost}
        />
      )}

      <Comments />
    </TemplateLayout>
  );
}
