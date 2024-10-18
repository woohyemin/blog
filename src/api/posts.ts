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
  completed?: boolean;
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

export type PostType = "all" | "writing" | "study" | "project";

export const getAllPosts = async (type: PostType = "all"): Promise<Post[]> => {
  const writingPostsDirectory = path.join(
    process.cwd(),
    "src/data/posts/writing"
  );
  const studyPostsDirectory = path.join(process.cwd(), "src/data/posts/study");

  const writingFileNames = readdirSync(writingPostsDirectory);
  const studyFileNames = readdirSync(studyPostsDirectory);

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

  const writingPosts = await getPostsData(
    writingPostsDirectory,
    writingFileNames
  );
  const studyPosts = await getPostsData(studyPostsDirectory, studyFileNames);
  let posts: Post[] = [];

  if (type === "all") posts = [...writingPosts, ...studyPosts];
  if (type === "writing") posts = writingPosts;
  if (type === "study") posts = studyPosts;

  const activePosts = posts.filter((post) => post.activate);
  const sortedPosts = activePosts.sort((a, b) => b.date.localeCompare(a.date));
  const formattedPosts = sortedPosts.map((post) => ({
    ...post,
    date: formatDate(post.date.split(" ")[0]),
  }));

  return formattedPosts;
};

export type ProjectType = "all" | "project";

export const getAllProjects = async (): Promise<Post[]> => {
  const projectsDirectory = path.join(process.cwd(), "src/data/posts/project");
  const fileNames = readdirSync(projectsDirectory);
  const allProjects = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
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

  const activeProjects = allProjects.filter((project) => project.activate);
  const sortedProjects = activeProjects.sort((a, b) =>
    b.date.localeCompare(a.date)
  );
  const formattedProjects = sortedProjects.map((project) => ({
    ...project,
    date: formatDate(project.date.split(" ")[0]),
  }));

  return formattedProjects;
};

export async function getPost({
  id,
  type,
}: {
  id: string;
  type: PostType;
}): Promise<Post | "not-found"> {
  const postsDirectory = path.join(process.cwd(), `src/data/posts/${type}`);
  const filePath = path.join(postsDirectory, `${id}.mdx`);
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
  const postdata: any = frontmatter;

  if (!mdxSource || !frontmatter.activate) {
    console.error(`❗️ '${id}'에 해당하는 글을 찾을 수 없습니다.`);
    return "not-found";
  }

  return {
    ...frontmatter,
    date: formatDate(postdata.date.split(" ")[0]),
    path: id.replace(/\.mdx$/, ""),
    content: compiledSource,
    source: mdxSource,
  } as Post;
}

export async function getPrevNextPost({
  id,
  type,
}: {
  id: string;
  type: PostType;
}): Promise<PrevNextPost | "not-found"> {
  const allPosts = await getAllPosts(type);
  const currPost = await getPost({ id, type });

  if (!currPost || currPost === "not-found") {
    console.error(
      `❗️ '${id}'에 해당하는 글을 찾을 수 없어, 이전 또는 다음 글을 찾을 수 없습니다.`
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
