import path from "path";
import { promises as fs } from "fs";
import { readFile } from "fs/promises";
import { cache } from "react";
import { Category } from "@/components/Categories";

export interface Post {
  id: number;
  title: string;
  date: string;
  description: string;
  series: string;
  categories: Category[];
  path: string;
  featured: boolean;
  content: string;
  readingTime: number;
  related: string[];
  prevPost?: string;
  nextPost?: string;
  thumbnail?: string;
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
        `${post.series}`,
        `${post.path}.md`
      );
      const content = await readFile(filePath, "utf-8");
      return { ...post, content };
    })
  );
  return allPosts;
});

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const featuredPost = allPosts
    .filter((post: Post) => post.featured === true)
    .reverse();
  return featuredPost;
}

export async function getPost(fileName: string): Promise<Post> {
  const allPosts = await getAllPosts();
  const post = allPosts.find((post) => post.path === fileName);

  if (!post)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  return { ...post };
}
