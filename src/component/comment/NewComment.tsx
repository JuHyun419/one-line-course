import React, { useCallback, useMemo } from "react";
import {
  EButtonSize,
  EButtonType,
  ICommentData,
  IUserData,
} from "~/src/typings";
import Button from "../button/Button";
import {
  CommentUserName,
  CommentUserThumbnail,
  CommentContents,
} from "./comment-element";

interface INewCommentProps {
  me: IUserData;
  comment: ICommentData;
}

const NewComment: React.FC<INewCommentProps> = () => {
  return (
    <div>
      
    </div>
  );
};

export default NewComment;
