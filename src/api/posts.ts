import path from "path";
import { readFile } from "fs/promises";
import { Category } from "@/components/Categories";
import { readdirSync } from "fs";
import { formatDate } from "@/util/dateUtil";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

export interface PostData {
  title: string;
  date: string;
  categories: Category[];
  tags: string[];
  description?: string;
  series?: string;
  thumbnail?: string;
  activate?: boolean;
}

export interface Post extends PostData {
  path: string;
  content: string;
  source: MDXRemoteSerializeResult;
}

export interface PrevNextPost {
  nextPost?: Post;
  prevPost?: Post;
}

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export const getAllPosts = async (): Promise<Post[]> => {
  const fileNames = readdirSync(postsDirectory);
  const allPosts = await Promise.all(fileNames.map(async (fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = await readFile(filePath, 'utf8');

    const mdxSource = await serialize(fileContents, {mdxOptions: {remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitles], format: 'mdx'}, parseFrontmatter: true });
    const { frontmatter, compiledSource } = mdxSource;

    return {
      ...frontmatter,
      path: fileName.replace(/\.mdx$/, ''),
      content: compiledSource,
      source: mdxSource,
    } as Post;
  }));

  const activePosts = allPosts.filter((post) => post.activate);
  const sortedPosts = activePosts.sort((a, b) => b.date.localeCompare(a.date));
  const result = sortedPosts.map((post) => ({...post, date: formatDate(post.date.split(' ')[0])}));

  return result;
};

export async function getPost(slug: string): Promise<Post | "not-found"> {
  const allPosts = await getAllPosts();
  const post = allPosts.find((post) => post.path === slug);

  if (!post) {
    console.error(`❗️ '${slug}'에 해당하는 글을 찾을 수 없습니다.`);
    return "not-found";
  }

  return { ...post };
}

export async function getPrevNextPost(
  slug: string
): Promise<PrevNextPost | "not-found"> {
  const allPosts = await getAllPosts();
  const currPost = await getPost(slug);

  if (!currPost || currPost === "not-found") {
    console.error(
      `❗️ '${slug}'에 해당하는 글을 찾을 수 없어, 이전 또는 다음 글을 찾을 수 없습니다.`
    );
    return "not-found";
  }

  const currIndex = allPosts.findIndex((post) => post.path === currPost.path);
  const prevIndex = currIndex + 1;
  const nextIndex = currIndex - 1;

  const nextPost = nextIndex >= 0 ? allPosts[nextIndex] : undefined;
  const prevPost =
    prevIndex < allPosts.length ? allPosts[prevIndex] : undefined;

  return { nextPost, prevPost };
}
