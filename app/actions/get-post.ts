import prismadb from "@/libs/prismadb";
import { Post as PostType } from "@prisma/client";

const getPost = async (id: string) => {
  const post: PostType | null = await prismadb.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

export default getPost;
