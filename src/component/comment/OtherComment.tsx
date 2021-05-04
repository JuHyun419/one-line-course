import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { EButtonSize, EButtonType, ICommentData } from "~/src/typings";
import Button from "../button/Button";
import {
  CommentUserName,
  CommentUserThumbnail,
  CommentContents,
} from "./comment-element";
import CommentCreatedAt from "./comment-element/createdAt/CommentCreatedAt";
import { useUserData } from "./useUserData";

import "./_OtherComment.scss";

interface ICommentProps {
  comment?: ICommentData;
  isMyComment: boolean;
}

const OtherComment: React.FC<ICommentProps> = ({
  comment,
  isMyComment = false,
}) => {
  const [imageURL, setImageURL] = useState("");
  const [userName, setUserName] = useState("");

  const [contents, setContents] = useState("");
  const [createdAt, setCreatedAt] = useState<Date>();

  if (!comment) {
    return null;
  }

  useUserData(comment.userId, setImageURL, setUserName);

  // user thumbnail
  const thumbnailJSX = useMemo(
    () => <CommentUserThumbnail imageURL={imageURL} altName={userName} />,
    [imageURL, userName]
  );

  // user name
  const nameJSX = useMemo(() => <CommentUserName name={userName} />, [
    userName,
  ]);

  // contents
  useEffect(() => {
    setContents(comment.content);
  }, [comment]);

  const contentsJSX = useMemo(() => <CommentContents contents={contents} />, [
    contents,
  ]);

  // created at
  useEffect(() => {
    setCreatedAt(comment.createdAt);
  }, [comment]);

  const createdAtJSX = useMemo(
    () => <CommentCreatedAt createdAt={createdAt!} />,
    [createdAt]
  );

  const onDelete = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);
  const onFix = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);

  const myCommentButtonsJSX = useMemo(
    () =>
      isMyComment && (
        <Fragment>
          <Button
            btnSize={EButtonSize.Small}
            btnType={EButtonType.Primary}
            onClick={onFix}
            // additionalStyles={{ fontSize: "0.9rem" }}
          >
            수정
          </Button>
          <Button
            btnSize={EButtonSize.Small}
            btnType={EButtonType.Danger}
            onClick={onDelete}
            // additionalStyles={{ fontSize: "0.9rem" }}
          >
            삭제
          </Button>
        </Fragment>
      ),
    [isMyComment]
  );

  return (
    <div className="comment--other-comment">
      <div className="comment--other-comment-col1">
        {thumbnailJSX}
        {nameJSX}
      </div>
      <div className="comment--other-comment-col2">
        {contentsJSX}
        {myCommentButtonsJSX}
        {createdAtJSX}
      </div>
    </div>
  );
};

export default OtherComment;
