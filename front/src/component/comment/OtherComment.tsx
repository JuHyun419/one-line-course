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

interface ICommentProps {
  comment: ICommentData;
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

  useUserData(comment.userID, setImageURL, setUserName);

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
    setContents(comment.contents);
  }, [comment.contents]);

  const contentsJSX = useMemo(() => <CommentContents contents={contents} />, [
    contents,
  ]);

  // created at
  useEffect(() => {
    setCreatedAt(comment.createdAt);
  }, [comment.createdAt]);

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
      ),
    [isMyComment]
  );

  return (
    <div>
      {thumbnailJSX}
      {nameJSX}
      {contentsJSX}
      {myCommentButtonsJSX}
      {createdAtJSX}
    </div>
  );
};

export default OtherComment;
