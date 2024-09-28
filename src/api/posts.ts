import path from "path";
import { readFile } from "fs/promises";
import { readdirSync } from "fs";
import { formatDate } from "@/util/dateUtil";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

export interface PostData {
  title: string;
  date: string;
  categories: string[];
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

export type PostType = 'all' | 'writing' | 'study'

const filtersByType: Record<PostType, (post: Post) => void> = {
  all: (post: Post) => post,
  study: (post: Post) => post.tags.includes('Study'),
  writing: (post: Post) => !post.tags.includes('Study'),
};

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

export const getAllPosts = async (type: PostType = 'all'): Promise<Post[]> => {
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

  const filteredPosts = allPosts.filter(filtersByType[type]);
  const activePosts = filteredPosts.filter((post) => post.activate);
  const sortedPosts = activePosts.sort((a, b) => b.date.localeCompare(a.date));
  const formattedPosts = sortedPosts.map((post) => ({...post, date: formatDate(post.date.split(' ')[0])}));

  return formattedPosts;
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

  const currPostType = currPost.tags.includes('Study') ? 'study' : 'writing';
  const filteredPosts = allPosts.filter(filtersByType[currPostType]);

  const currIndex = filteredPosts.findIndex((post) => post.path === currPost.path);
  const prevIndex = currIndex + 1;
  const nextIndex = currIndex - 1;

  const nextPost = nextIndex >= 0 ? filteredPosts[nextIndex] : undefined;
  const prevPost =
    prevIndex < filteredPosts.length ? filteredPosts[prevIndex] : undefined;

  return { nextPost, prevPost };
}
