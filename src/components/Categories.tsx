import { Post } from "@/lib/api";
import Category from "./category";

export type Category =
  | "All"
  | "next.js"
  | "react"
  | "typescript"
  | "javascript"
  | "tailwindcss"
  | "developments"
  | "side-projects"
  | "library";

const categoryList: Category[] = [
  "All",
  "next.js",
  "react",
  "typescript",
  "javascript",
  "tailwindcss",
  "developments",
  "side-projects",
  "library",
];

interface Props {
  currCategory: Category;
  setCurrCategory: (category: Category) => void;
  allPosts: Post[];
}

export default function Categories({
  currCategory,
  setCurrCategory,
  allPosts,
}: Props) {
  const onCategoryClick = (category: Category) => setCurrCategory(category);

  const numOfCategoryPosts = (currCategory: Category) => {
    if (currCategory === "All") return allPosts.length;
    return allPosts.filter((post) => post.category === currCategory).length;
  };

  return (
    <ul>
      {categoryList.map((category) => (
        <li key={category}>
          <button onClick={() => onCategoryClick(category)}>
            <Category selected={currCategory === category} category={category}>
              <span>{numOfCategoryPosts(category)}</span>
            </Category>
          </button>
        </li>
      ))}
    </ul>
  );
}
