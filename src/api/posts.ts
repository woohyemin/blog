import path from "path";
import { readFile } from "fs/promises";
import { readdirSync } from "fs";
import { formatDate } from "@/util/dateUtil";
import { serialize } from "next-mdx-remote/serialize";
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
  url?: string;
  completed?: boolean;
  activate?: boolean;
}

export interface Post extends PostData {
  path: string;
  content: string;
  source: MDXRemoteSerializeResult;
  prevNextPost?: PrevNextPost;
}

export interface PrevNextPost {
  nextPost?: Post;
  prevPost?: Post;
}

export type PostType = "writing" | "study" | "project";

const getPostsData = async (directory: string, fileNames: string[]) => {
  return await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(directory, fileName);
      const fileContents = await readFile(filePath, "utf8");

      const mdxSource = await serialize(fileContents, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeCodeTitles],
          format: "mdx",
        },
        parseFrontmatter: true,
      });
      const { frontmatter, compiledSource } = mdxSource;

      return {
        ...frontmatter,
        path: fileName.replace(/\.mdx$/, ""),
        content: compiledSource,
        source: mdxSource,
      } as Post;
    })
  );
};

export const getPosts = async (type: PostType): Promise<Post[]> => {
  const directory = path.join(process.cwd(), `src/data/posts/${type}`);
  const fileNames = readdirSync(directory);
  const posts = await getPostsData(directory, fileNames);

  const activePosts = posts.filter((post) => post.activate);
  const sortedPosts = activePosts.sort((a, b) => b.date.localeCompare(a.date));
  const formattedPosts = sortedPosts.map((post) => ({
    ...post,
    date: formatDate(post.date.split(" ")[0]),
  }));

  return formattedPosts;
};

export async function getPrevNextPost({
  allPosts,
  currPostPath,
}: {
  allPosts: Post[];
  currPostPath: string;
}): Promise<PrevNextPost | "not-found"> {
  const currIndex = allPosts.findIndex((post) => post.path === currPostPath);
  const prevIndex = currIndex + 1;
  const nextIndex = currIndex - 1;

  const nextPost = nextIndex >= 0 ? allPosts[nextIndex] : undefined;
  const prevPost =
    prevIndex < allPosts.length ? allPosts[prevIndex] : undefined;

  return { nextPost, prevPost };
}

export async function getPost({
  id,
  type,
}: {
  id: string;
  type: PostType;
}): Promise<Post | "not-found"> {
  const allPosts = await getPosts(type);
  const currPost = allPosts.find((post) => post.path === id);

  if (!currPost || !currPost.activate) {
    console.error(`❗️ '${id}'에 해당하는 글을 찾을 수 없습니다.`);
    return "not-found";
  }

  const prevNextPost = await getPrevNextPost({
    allPosts,
    currPostPath: currPost.path,
  });

  return {
    ...currPost,
    prevNextPost,
  } as Post;
}
