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
  lectureId: number;
}

const NewComment: React.FC<INewCommentProps> = ({ lectureId }) => {
  const [commentContents, setCommentContents] = useState("");
  const user: IUserData | null = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryUser.user
  );

  // user thumbnail
  const thumbnailJSX: JSX.Element | null = useMemo(
    () =>
      user ? (
        <CommentUserThumbnail imageURL={user.imageUrl} altName={user.name} />
      ) : null,
    [user]
  );

  // user name
  const userNameJSX: JSX.Element | null = useMemo(
    () => (user ? <CommentUserName name={user.name} /> : null),
    [user]
  );

  const onSubmit = useCallback(
    async _ => {
      if (!user) {
        return;
      }

      await post_AddComment({
        content: commentContents,
        lectureId,
        userId: user.id,
      });

      // wipe out the comment area after submit
      setCommentContents("");
    },
    [user, commentContents, lectureId]
  );

  return (
    <div className="comment--new-comment">
      <div className="comment--new-comment-col1">
        {thumbnailJSX}
        {userNameJSX}
      </div>
      <div className="comment--new-comment-col2">
        <CommentTextArea setContents={setCommentContents} value={commentContents}/>
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
