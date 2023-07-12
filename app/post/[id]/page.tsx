import React from "react";
import Sidebar from "@/app/components/sidebar";
import Content from "./components/content";
import getPost from "@/app/actions/get-post";
import { FormattedPost } from "@/libs/types";

type Props = {
  params: { id: string };
};

const Page = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-10">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Page;
