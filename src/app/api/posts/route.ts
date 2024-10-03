import { NextResponse } from "next/server";
import { getAllPosts, PostType } from "@/api/posts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = (searchParams.get("tab") || "all") as PostType;
  const data = await getAllPosts(type);

  return NextResponse.json(data);
}
