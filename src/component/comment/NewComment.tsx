import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { post_AddComment } from "~/src/service/CommentService";
import { TCombinedStates } from "~/src/store";
import { EButtonSize, EButtonType, IUserData } from "~/src/typings";
import Button from "../button/Button";
import { CommentUserName, CommentUserThumbnail } from "./comment-element";
import CommentTextArea from "./comment-element/text-area/CommentTextArea";

import "./_NewComment.scss";

interface INewCommentProps {
  lectureID: number;
}

const NewComment: React.FC<INewCommentProps> = ({ lectureID }) => {
  const [commentContents, setCommentContents] = useState("");
  const user: IUserData | null = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryUser.user
  );

  // user thumbnail
  const thumbnailJSX: JSX.Element | null = useMemo(() => {
    if (!user) {
      return null;
    }

    return (
      <CommentUserThumbnail imageURL={user.imageUrl} altName={user.name} />
    );
  }, [user]);

  // user name
  const nameJSX: JSX.Element | null = useMemo(() => {
    if (!user) {
      return null;
    }

    return <CommentUserName name={user.name} />;
  }, [user]);

  const onSubmit = useCallback(
    async _ => {
      if (!user) {
        return;
      }
      await post_AddComment(lectureID, {
        content: commentContents,
        lectureId: lectureID,
        userId: user.id,
      });
    },
    [user, commentContents, lectureID]
  );

  return (
    <div className="comment--new-comment">
      <div className="comment--new-comment-col1">
        {thumbnailJSX}
        {nameJSX}
      </div>
      <div className="comment--new-comment-col2">
        <CommentTextArea setContents={setCommentContents} />
        <Button
          btnSize={EButtonSize.Small}
          btnType={EButtonType.Warning}
          onClick={onSubmit}
        >
          등록
        </Button>
      </div>
    </div>
  );
};

export default NewComment;
