import { Post, PostType } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";

const fetchPost = async ({
  id,
  type,
}: {
  id: string;
  type: PostType;
}): Promise<Post> => {
  const response = await fetch(`/api/posts/${id}?type=${type}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
};

export const useGetPost = ({ id, type }: { id: string; type: PostType }) => {
  return useQuery({
    queryKey: ["post", id, type],
    queryFn: () => fetchPost({ id, type }),
    enabled: !!id && !!type,
  });
};
