import React, { useCallback, useMemo, useState } from "react";
import { EButtonSize, EButtonType } from "~/src/typings";
import Button from "../button/Button";
import { CommentUserName, CommentUserThumbnail } from "./comment-element";
import CommentTextArea from "./comment-element/text-area/CommentTextArea";
import { useUserData } from "./useUserData";

import "./_NewComment.scss";

interface INewCommentProps {
  myUserID: string;
}

const NewComment: React.FC<INewCommentProps> = ({ myUserID }) => {
  const [imageURL, setImageURL] = useState("");
  const [userName, setUserName] = useState("");

  useUserData(myUserID, setImageURL, setUserName);

  // user thumbnail
  const thumbnailJSX = useMemo(
    () => <CommentUserThumbnail imageURL={imageURL} altName={userName} />,
    [imageURL, userName]
  );

  // user name
  const nameJSX = useMemo(() => <CommentUserName name={userName} />, [
    userName,
  ]);

  const onSubmit = useCallback((e: React.MouseEvent<HTMLDivElement>) => {}, []);

  return (
    <div>
      {thumbnailJSX}
      {nameJSX}
      <CommentTextArea />
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Alt}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default NewComment;
