import React from "react";

import "./_CommentContents.scss";

interface ICommentContentsProps {
  contents: string;
}

const CommentContents: React.FC<ICommentContentsProps> = ({ contents }) => {
  return <div className="comments-contents">{contents}</div>;
};

export default CommentContents;
