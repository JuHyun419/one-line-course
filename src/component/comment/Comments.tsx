import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "~/src/store";
import { initFetch_QueryAllComments } from "~/src/store/action/comment-async";
import OtherComment from "./OtherComment";

interface ICommentsProps {
  lectureID: number;
}

const Comments: React.FC<ICommentsProps> = ({ lectureID }) => {
  initComments(lectureID);

  const user = useSelector((state: TCombinedStates) => state.user.user);
  const otherComments = useSelector(
    (state: TCombinedStates) => state.commentAsync_QueryAllComments.comments
  );

  // TODO: 1. Empty Comment
  // TODO: 2. My Comments
  // const myComment = useMemo(() => )

  // const myCommentsJSX: JSX.Element[] | null = useMemo(() => {
  //   if ()
  // })

  // TODO: 3. Other Comments belong to this lecture
  const otherCommentsJSX: JSX.Element[] | null = useMemo(() => {
    if (otherComments && user) {
      return new Array(otherComments.length)
        .fill(0)
        .map(comment => <OtherComment key={uuid()} comment={comment} />);
    } else {
      return null;
    }
  }, [user, otherComments]);

  return <div>{otherCommentsJSX}</div>;
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
