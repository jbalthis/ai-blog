import prismadb from "@/libs/prismadb";

const getPosts = async () => {
  const posts = await prismadb.post.findMany();
  return posts;
};

export default getPosts;
