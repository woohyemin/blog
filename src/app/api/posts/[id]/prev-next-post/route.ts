import { getPrevNextPost, PostType } from "@/api/posts";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string; type: PostType } }
) {
  const { id, type } = params;
  const data = await getPrevNextPost({ id, type });

  return NextResponse.json(data);
}
