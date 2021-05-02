import React from "react";

import "./_CommentCreatedAt.scss";

interface ICommentCreatedAtProps {
  createdAt: Date;
}

const CommentCreatedAt: React.FC<ICommentCreatedAtProps> = ({ createdAt }) => {
  // Show only Date times
  const createAtAsStr: string = new String(createdAt).slice(0, 25);
  return <div className="comment--created-at">{createAtAsStr}</div>;
};

export default CommentCreatedAt;
