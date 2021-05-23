import React from "react";

import "./_CommentContents.scss";

interface ICommentContentsProps {
  contents: string;
}

const CommentContents: React.FC<ICommentContentsProps> = ({ contents }) => (
  <div className="comment--contents">{contents}</div>
);

export default CommentContents;
