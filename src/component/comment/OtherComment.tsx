import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import { EButtonSize, EButtonType, ICommentData } from "~/src/typings";
import Button from "../button/Button";
import {
  CommentUserName,
  CommentUserThumbnail,
  CommentContents,
} from "./comment-element";
import CommentCreatedAt from "./comment-element/createdAt/CommentCreatedAt";

import "./_OtherComment.scss";

interface ICommentProps {
  comment?: ICommentData;
  isMyComment: boolean;
}

const OtherComment: React.FC<ICommentProps> = ({
  comment,
  isMyComment = false,
}) => {
  const currentUser = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryUser.user
  );

  const onGoToLecture = useCallback((e: React.MouseEvent<HTMLDivElement>) => {},
  []);
  const onFix = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);
  const onDelete = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);

  const myCommentButtonsJSX = isMyComment && (
    <>
      {/* TODO: 강의로 가기 -> API, 스키마 작업 필요 */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Warning}
        onClick={onGoToLecture}
      >
        강의로 가기
      </Button>
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Primary}
        onClick={onFix}
      >
        수정
      </Button>
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Danger}
        onClick={onDelete}
      >
        삭제
      </Button>
    </>
  );

  return (
    <div className="comment--other-comment">
      <div className="comment--other-comment-col1">
        <CommentUserThumbnail
          imageURL={currentUser?.imageUrl!}
          altName={currentUser?.name!}
        />
        <CommentUserName name={currentUser?.name!} />
      </div>
      <div className="comment--other-comment-col2">
        <CommentContents contents={comment?.content!} />
        {myCommentButtonsJSX}
        <CommentCreatedAt createdAt={comment?.createdAt!} />
      </div>
    </div>
  );
};

export default OtherComment;
