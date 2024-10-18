import { NextResponse } from "next/server";
import { getPost } from "@/api/posts";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await getPost({ id, type: "all" });

  return NextResponse.json(data);
}
