import React from "react";

import "./_CommentCreatedAt.scss";

interface ICommentCreatedAtProps {
  createdAt: Date;
}

const CommentCreatedAt: React.FC<ICommentCreatedAtProps> = ({ createdAt }) => {
  return <div className="comment--created-at">{createdAt}</div>;
};

export default CommentCreatedAt;
