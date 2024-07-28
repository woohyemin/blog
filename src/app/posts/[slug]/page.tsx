import { Dot } from "@/components/atoms/data-display/Dot";
import { ByHem } from "@/components/molecules/ByHem";
import Comments from "@/components/organisms/Comments";
import { Header } from "@/components/organisms/Header";
import { PostLayout } from "@/components/templates/layout/PostLayout.tsx";
import { TemplateLayout } from "@/components/templates/layout/TemplateLayout";
import { getPost } from "@/lib/api";
import { Metadata } from "next";
import Image from "next/image";
import { Chip } from "@/components/atoms/data-display/Chip";
import { RelatedPost } from "@/components/organisms/RelatedPosts";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description, path } = await getPost(slug);
  const imagePaths = path.split("-");

  return {
    metadataBase: new URL("https://blog-woohyemins-projects.vercel.app"),
    title,
    description,
    openGraph: {
      images: [
        {
          url: `/images/posts/${imagePaths.join("/")}/${imagePaths.join("_")}_thumbnail.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `/images/posts/${imagePaths.join("/")}/${imagePaths.join("_")}_thumbnail.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);

  const prevPost = post.prevPost ? await getPost(post.prevPost) : undefined;
  const nextPost = post.nextPost ? await getPost(post.nextPost) : undefined;

  if (!post) {
    return <div className="bg-red-50 w-5 h-5" />;
  }

  return (
    <TemplateLayout>
      <div className="mb-8 sm:mb-10">
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
              <div className="flex gap-1.5 pt-2.5 pb-1.5 sm:py-3.5 sm:pb-2.5 sm:gap-2">
                {post.categories.map((category) => (
                  <Chip key={category}>{category}</Chip>
                ))}
              </div>
            </div>
          }
        />

        {post.thumbnail && (
          <Image
            className="w-full h-[220px] mt-2 rounded-xl object-cover sm:mt-4 sm:h-[360px]"
            src={`/images/posts/${post.thumbnail}`}
            alt={`${post.title} 섬네일`}
            width={540}
            height={320}
          />
        )}
      </div>

      <PostLayout>{post.content}</PostLayout>

      <RelatedPost prevPost={prevPost} nextPost={nextPost} />

      <Comments />
    </TemplateLayout>
  );
}
