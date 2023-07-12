import React from "react";

type Props = {
  isEditable: boolean;
  title?: string;
  author?: string;
  createdAt?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  titleError?: string;
};

const Header = ({
  isEditable,
  title,
  author,
  createdAt,
  onChange,
  titleError,
}: Props) => {
  return (
    <>
      {isEditable ? (
        <div>
          <textarea
            className="border-2 rounded-md bg-wh-50 p-3 w-full"
            placeholder="Title"
            onChange={onChange}
            value={title}
          />
          {titleError && (
            <p className="mt-1 text-accent-red font-bold">{titleError}</p>
          )}
        </div>
      ) : (
        <h3 className="font-bold text-3xl mt-3">{title}</h3>
      )}
      <div className="flex gap-3">
        <h5 className="font-semibold text-xs">By {author}</h5>
        <h6 className="text-wh-300 text-xs">{createdAt}</h6>
      </div>
    </>
  );
};

export default Header;
