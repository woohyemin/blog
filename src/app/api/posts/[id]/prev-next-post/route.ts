import { getPrevNextPost } from "@/api/posts";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await getPrevNextPost(id);

  return NextResponse.json(data);
}
