import React from "react";
import Card from "@/app/components/card";
import { Post } from "@prisma/client";

type Props = {
  posts: Post[];
};

const Other = ({ posts }: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />

      {/* HEADER */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>

      <div className="sm:grid grid-cols-2 gap-16">
        <Card post={posts[0]} className="mt-5 sm:mt-0" imageHeight="h-80" />
        <Card post={posts[1]} className="mt-5 sm:mt-0" imageHeight="h-80" />
        <Card post={posts[2]} className="mt-5 sm:mt-0" imageHeight="h-80" />
        <Card post={posts[3]} className="mt-5 sm:mt-0" imageHeight="h-80" />
      </div>
    </section>
  );
};

export default Other;
