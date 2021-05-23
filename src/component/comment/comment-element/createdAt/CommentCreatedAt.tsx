import React from "react";

import "./_CommentCreatedAt.scss";

interface ICommentCreatedAtProps {
  createdAt: Date;
}

// Show only Date & times
const CommentCreatedAt: React.FC<ICommentCreatedAtProps> = ({ createdAt }) => (
  <div className="comment--created-at">
    {new String(createdAt).slice(0, 25)}
  </div>
);

export default CommentCreatedAt;
