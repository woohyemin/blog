import { NextResponse } from "next/server";
import { getPost, PostType } from "@/api/posts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") as PostType;

  const data = await getPost({ id, type });

  return NextResponse.json(data);
}
