import { NextResponse } from "next/server";
import { getPosts, PostType } from "@/api/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = (searchParams.get("tab") || "all") as PostType;
  const data = await getPosts(type);

  return NextResponse.json(data);
}
