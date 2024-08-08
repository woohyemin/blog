import path from "path";
import { readFile } from "fs/promises";
import { Category } from "@/components/Categories";
import { formatDate } from "@/util/dateUtil";

export interface Post {
  id: string;
  title: string;
  date: string;
  path: string;
  content: string;
  categories: Category[];
  tags: string[];
  description?: string;
  series?: string;
  prevPost?: string;
  nextPost?: string;
  thumbnail?: string;
  activate?: boolean;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = await readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const allPosts = await Promise.all(
    data.map(async (post: Post) => {
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
};

export async function getPost(fileName: string): Promise<Post> {
  const allPosts = await getAllPosts();
  const post = allPosts.find((post) => post.path === fileName);

  if (!post)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  return { ...post };
}
