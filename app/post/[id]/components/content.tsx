"use client";

import React, { useState } from "react";
import { FormattedPost } from "@/libs/types";
import Image from "next/image";
import SocialLinks from "@/app/components/social-links";
import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CategoryAndEdit from "./category-and-edit";
import Header from "./header";
import Article from "./article";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [titleTemp, setTitleTemp] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [contentTemp, setContentTemp] = useState<string>(content);

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") return setTitleError("This field is required.");
    if (editor?.isEmpty) return setContentError("This field is required.");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTitleTemp("");
    setContentTemp("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl focus:outline-none w-full max-w-full leading-8",
      },
    },
    editable: isEditable,
    content: content,
  });

  const date = new Date(post?.createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* BREADCRUMBS */}
      <h5 className="text-wh-300">{`Home > ${post?.category} > ${post?.title}`}</h5>

      {/* CATEGORY AND EDIT */}
      <CategoryAndEdit
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        titleTemp={titleTemp}
        setTitleTemp={setTitleTemp}
        contentTemp={contentTemp}
        setContentTemp={setContentTemp}
        editor={editor}
        post={post}
      />

      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <Header
          title={title}
          author={post.author}
          createdAt={formattedDate}
          onChange={handleOnChangeTitle}
          isEditable={isEditable}
          titleError={titleError}
        />

        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            src={post.image}
            alt={post.title}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 85vw,
                  (max-width: 1060px) 75vw,
                  60vw"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>

        {/* CONTENT */}
        <Article
          editor={editor}
          isEditable={isEditable}
          setContent={setContent}
          contentError={contentError}
          title={title}
        />

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
