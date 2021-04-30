import React from "react";

import "./_CommentUserName.scss";

interface ICommentUserNameProps {
  name: string;
}

const CommentUserName: React.FC<ICommentUserNameProps> = ({ name }) => {
  return <p className="comment--user-name">{name}</p>
};

export default CommentUserName;
