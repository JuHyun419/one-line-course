import React from "react";

import "./_CommentTextArea.scss";

const CommentTextArea = () => {
  return <textarea className="comment--text-area" wrap="soft" required/>;
};

export default CommentTextArea;
