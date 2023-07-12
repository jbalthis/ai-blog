"use client";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FormattedPost } from "@/libs/types";
import { Editor } from "@tiptap/react";
import React, { useState } from "react";

type Props = {
  isEditable: boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  titleTemp: string;
  setTitleTemp: (titleTemp: string) => void;
  contentTemp: string;
  setContentTemp: (contentTemp: string) => void;
  editor: Editor | null;
  post: FormattedPost;
};

const CategoryAndEdit = ({
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  titleTemp,
  setTitleTemp,
  contentTemp,
  setContentTemp,
  editor,
  post,
}: Props) => {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTitleTemp(title);
    setContentTemp(editor?.getHTML() || "");
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(titleTemp);
    editor?.commands.setContent(contentTemp);
  };

  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900">
        {post.category}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};
export default CategoryAndEdit;
