import { Editor, EditorContent } from "@tiptap/react";
import React from "react";
import EditorMenuBar from "./editor-menu-bar";

type Props = {
  editor: Editor | null;
  isEditable: boolean;
  contentError?: string;
  title: string;
  setContent: (content: string) => void;
};

const Article = ({ editor, isEditable, contentError, title }: Props) => {
  if (!editor) return null;

  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            {/* EDITOR MENUBAR */}
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default Article;
