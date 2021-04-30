import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { get_QueryUser } from "~/src/service/UserService";
import {
  EButtonSize,
  EButtonType,
  ICommentData,
  IUserData,
} from "~/src/typings";
import {
  CommentUserName,
  CommentUserThumbnail,
  CommentContents,
} from "./comment-element";
import CommentCreatedAt from "./comment-element/comment-createdAt/CommentCreatedAt";
import { useUserData } from "./useUserData";

interface ICommentProps {
  comment: ICommentData;
}

const OtherComment: React.FC<ICommentProps> = ({ comment }) => {
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

  return (
    <div>
      {thumbnailJSX}
      {nameJSX}
      {contentsJSX}
      {createdAtJSX}
    </div>
  );
};

export default OtherComment;
