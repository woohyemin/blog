import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "hem's posts";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        hem's posts
      </div>
    ),
    {
      ...size,
    }
  );
}
