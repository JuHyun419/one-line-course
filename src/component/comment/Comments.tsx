import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "~/src/store";
import { initFetch_QueryAllComments } from "~/src/store/action/comment-async";
import { ICommentData } from "~/src/typings";
import NewComment from "./NewComment";
import OtherComment from "./OtherComment";

interface ICommentsProps {
  lectureID: number;
}

const Comments: React.FC<ICommentsProps> = ({ lectureID }) => {
  initComments(lectureID);

  const user = useSelector((state: TCombinedStates) => state.user.user);

  const myComments = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyComments.comments
  );
  const otherComments = useSelector(
    (state: TCombinedStates) => state.commentAsync_QueryAllComments.comments
  );

  const myUserID = sessionStorage.getItem("userID");

  // TODO: 1. New Comment
  const newCommentJSX: JSX.Element | null = useMemo(
    () => <NewComment myUserID={myUserID!} />,
    [myUserID]
  );

  // TODO: 2. My Comments
  const myCommentsJSX: JSX.Element[] | null = useMemo(
    () =>
      myComments &&
      user &&
      new Array(myComments.length)
        .fill(0)
        .map((comment: ICommentData) => (
          <OtherComment key={comment.commentID} comment={comment} isMyComment />
        )),
    [user, myComments]
  );

  // TODO: 3. Other Comments belong to this lecture
  const otherCommentsJSX: JSX.Element[] | null = useMemo(
    () =>
      otherComments &&
      user &&
      new Array(otherComments.length)
        .fill(0)
        .map((comment: ICommentData) => (
          <OtherComment
            key={comment.commentID}
            comment={comment}
            isMyComment={false}
          />
        )),
    [user, otherComments]
  );

  return (
    <div>
      {newCommentJSX}
      {myCommentsJSX}
      {otherCommentsJSX}
    </div>
  );
};

const initComments = (lectureID: number) => {
  const dispatch = useDispatch();
  const _queryAllComments = useCallback(
    () => dispatch(initFetch_QueryAllComments(lectureID)),
    []
  );

  useEffect(() => {
    _queryAllComments();
  }, [lectureID]);
};

export default Comments;
