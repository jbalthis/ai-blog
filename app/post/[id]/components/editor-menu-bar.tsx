import { Editor } from "@tiptap/react";
import { type } from "os";

type Props = {
  editor: Editor | null;
};

const EditorMenuBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="mb-1 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          <b>B</b>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          <i>I</i>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          p
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          H<span className="text-sm">1</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          H<span className="text-sm">2</span>
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          H<span className="text-sm">3</span>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          ul
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          ol
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive("blockquote")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          bq
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={
            editor.isActive("horizontalRule")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          hr
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className={
            editor.isActive("undo")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          <span className="font-semibold text-2xl">
            &lt;
            <br />
            <span className="text-xs">undo</span>
          </span>
        </button>
        
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className={
            editor.isActive("redo")
              ? "bg-wh-500 text-wh-50 p-2 rounded-md"
              : "p-2"
          }
        >
          <span className="font-semibold text-2xl">
            &gt;
            <br />
            <span className="text-xs">redo</span>
          </span>
        </button>
      </div>
      <hr />
    </div>
  );
};
export default EditorMenuBar;
