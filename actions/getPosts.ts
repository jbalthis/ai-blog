import { prisma } from "@/libs/prismadb";

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};
export default getPosts;
