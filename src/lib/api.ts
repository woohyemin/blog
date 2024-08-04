import path from "path";
import { promises as fs } from "fs";
import { readFile } from "fs/promises";
import { cache } from "react";
import { Category } from "@/components/Categories";
import { formatDate } from "@/util/dateUtil";

export interface Post {
  id: string;
  title: string;
  date: string;
  path: string;
  content: string;
  categories: Category[];
  related: string[];
  description?: string;
  series?: string;
  readingTime?: number;
  prevPost?: string;
  nextPost?: string;
  thumbnail?: string;
  activate?: boolean;
}

export interface PostData {
  next?: Post | null;
  prev?: Post | null;
}

export const getAllPosts = cache(async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  const flattedAllData = data.map((obj: Post) => Object.values(obj)[0]).flat();

  const allPosts = await Promise.all(
    flattedAllData.map(async (post: Post) => {
      const filePath = path.join(
        process.cwd(),
        "_posts",
        post.series || "",
        `${post.path}.md`
      );
      const content = await readFile(filePath, "utf-8");

      return { ...post, content, date: formatDate(post.date) };
    })
  );

  const activePosts = allPosts.filter((post) => post.activate);

  return activePosts;
});

export async function getPost(fileName: string): Promise<Post> {
  const allPosts = await getAllPosts();
  const post = allPosts.find((post) => post.path === fileName);

  if (!post)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  return { ...post };
}
