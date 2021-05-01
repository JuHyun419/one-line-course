import React, { useCallback, useEffect, useMemo, useState } from "react";
import { USERID_SESSION_STORAGE_KEY } from "~/src/common";
import { EButtonSize, EButtonType } from "~/src/typings";
import Button from "../button/Button";
import { CommentUserName, CommentUserThumbnail } from "./comment-element";
import CommentTextArea from "./comment-element/text-area/CommentTextArea";
import { useUserData } from "./useUserData";

import "./_NewComment.scss";

const NewComment = () => {
  const [imageURL, setImageURL] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setImageURL(
      "https://lh3.googleusercontent.com/a/AATXAJx46cywrab804ZxmuhTdu6CZztFn-mlQ-1bEIwX=s96-c"
    );
    setUserName("하이피");
  }, []);

  // const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
  // useUserData(userID!, setImageURL, setUserName);

  // user thumbnail
  const thumbnailJSX: JSX.Element | null = useMemo(
    () => <CommentUserThumbnail imageURL={imageURL} altName={userName} />,
    [imageURL, userName]
  );

  // user name
  const nameJSX: JSX.Element | null = useMemo(
    () => <CommentUserName name={userName} />,
    [userName]
  );

  // TODO:
  const onSubmit = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);

  return (
    <div className="comment--new-comment">
      <div className="comment--new-comment-col1">
        {thumbnailJSX}
        {nameJSX}
      </div>
      <div className="comment--new-comment-col2">
        <CommentTextArea />
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
