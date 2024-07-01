import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "hem's post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(
    `https://blog-woohyemins-projects.vercel.app/posts/${params.slug}`
  ).then((res) => res.json());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "blue",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.title}
        og image
      </div>
    ),
    {
      ...size,
    }
  );
}
