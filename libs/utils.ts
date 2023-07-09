import { each } from "lodash";
import { Post } from "@prisma/client";

export function formatPosts(posts: Post[]) {
  const trendingPosts: Array<Post> = [];
  const techPosts: Array<Post> = [];
  const travelPosts: Array<Post> = [];
  const otherPosts: Array<Post> = [];

  each(posts, (post: Post) => {
    if (post?.category === "Tech") {
      techPosts.push(post);
    } else if (post?.category === "Travel") {
      travelPosts.push(post);
    } else if (post?.category === "Interior Design") {
      otherPosts.push(post);
    }

    trendingPosts.length < 4 ? trendingPosts.push(post) : null;
  });

  return [trendingPosts, techPosts, travelPosts, otherPosts];
}
