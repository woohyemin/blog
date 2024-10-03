import { getPost } from "@/api/posts";
import { Metadata } from "next";
import PostTemplate from "@/components/templates/post-template";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata | undefined> {
  const post = await getPost(id);

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

export default async function PostDetailPage({ params: { id } }: Props) {
  return <PostTemplate id={id} />;
}
