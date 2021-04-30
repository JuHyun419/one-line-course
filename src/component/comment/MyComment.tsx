import React, { Fragment, useCallback, useMemo } from "react";
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
import CommentCreatedAt from "./comment-element/comment-createdAt/CommentCreatedAt";

interface IMyCommentProps {
  comment: ICommentData;
}

const MyComment: React.FC<IMyCommentProps> = () => {
  const onDelete = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);
  const onFix = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);

  return (
    <div>
      <Fragment>
        <Button
          btnSize={EButtonSize.Small}
          btnType={EButtonType.Alt}
          onClick={onFix}
        >
          Fix
        </Button>
        <Button
          btnSize={EButtonSize.Small}
          btnType={EButtonType.Alt}
          onClick={onDelete}
        >
          Delete
        </Button>
      </Fragment>
    </div>
  );
};

export default MyComment;
