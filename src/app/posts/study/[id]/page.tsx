import { getPost } from "@/api/posts";
import { Metadata } from "next";
import PostTemplate from "@/components/templates/post-template";

export const dynamic = "force-static";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata | undefined> {
  const post = await getPost({ id, type: "study" });

  if (post === "not-found") return undefined;

  return {
    metadataBase: new URL("https://www.woohyemin.com"),
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: `/images/posts/${post.thumbnail}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `/images/posts/${post.thumbnail}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function StudyPostDetailPage({ params: { id } }: Props) {
  const post = await getPost({ id, type: "study" });

  return <PostTemplate type="study" post={post} />;
}
