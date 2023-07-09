import prismadb from "@/libs/prismadb";
import { Post } from "@prisma/client";

const getPosts = async () => {
  const posts = await prismadb.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default getPosts;
