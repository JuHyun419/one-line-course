import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import { IUserData } from "~/src/typings";
import { CommentUserName, CommentUserThumbnail } from "./comment-element";

const Comment = () => {
  const userData = useSelector((state: TCombinedStates) => state.user.user);
  const { thumbnailJSX, nameJSX } = useUserData(userData)!;

  // const commentData = useSelector((state: TCombinedStates) => state.userA)
  
  return (
    <div>
      {/* user thumbnail */}
      {thumbnailJSX}
      {/* user name */}
      {nameJSX}
      {/* comment - contents */}
      {/* comment - delete button */}
      {/* comment - fix button */}
      {/* comment - createdAt */}
    </div>
  );
};

const useUserData = (userData: IUserData | null) => {
  if (!userData) {
    return;
  }

  const { imageURL, name } = userData;

  const thumbnailJSX: JSX.Element = useMemo(
    () => <CommentUserThumbnail imageURL={imageURL} altName={name} />,
    [imageURL, name]
  );

  const nameJSX: JSX.Element = useMemo(() => <CommentUserName name={name} />, [
    name,
  ]);

  return { thumbnailJSX, nameJSX };
};

export default Comment;
