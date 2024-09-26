import createMDX from "@next/mdx";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles],
  },
});

export default withMDX(nextConfig);
