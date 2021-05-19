import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { USERID_SESSION_STORAGE_KEY } from "~/src/common";

import { TCombinedStates } from "~/src/store";
import { initFetch_QueryAllComments } from "~/src/store/action/comment-async";
import { ICommentData } from "~/src/typings";
import NewComment from "../comment/NewComment";
import OtherComment from "../comment/OtherComment";

interface IRetTypeInitComments {
  myUserId: string;
  otherComments: ICommentData[] | null;
}

interface ICommentsProps {
  lectureID: number;
}

import "./_LecturePopupComments.scss";

const LecturePopupComments: React.FC<ICommentsProps> = ({ lectureID }) => {
  const { myUserId, otherComments } = initComments(lectureID);
  const newCommentJSX: JSX.Element | null = makeNewComment(lectureID);
  // Other Comments belong to this lecture, except for the comments written by me
  const otherCommentsJSX: JSX.Element[] | null = makeOtherComments(
    otherComments,
    myUserId
  );
  // My comments that are picked from the other comments!
  const myCommentsJSX: JSX.Element[] | null = makeMyComments(
    otherComments,
    myUserId
  );

  return (
    <div className="lecturePopup--comments">
      {newCommentJSX}
      {myCommentsJSX}
      {otherCommentsJSX}
    </div>
  );
};

const initComments = (lectureID: number): IRetTypeInitComments => {
  const dispatch = useDispatch();
  const _queryAllComments = useCallback(
    () => dispatch(initFetch_QueryAllComments(lectureID)),
    []
  );

  useEffect(() => {
    _queryAllComments();
  }, [lectureID]);

  const myUserId = useMemo(
    () => sessionStorage.getItem(USERID_SESSION_STORAGE_KEY)!,
    []
  );

  const otherComments = useSelector(
    (state: TCombinedStates) => state.commentAsync_QueryAllComments.comments
  );

  return { myUserId, otherComments };
};

const makeNewComment = (lectureID: number): JSX.Element | null =>
  useMemo(() => <NewComment lectureId={lectureID} />, []);

const makeOtherComments = (
  otherComments: ICommentData[] | null,
  myUserId: string
): JSX.Element[] | null => {
  return useMemo(
    () =>
      otherComments &&
      otherComments
        .filter((comment: ICommentData) => comment.userId !== myUserId)
        .map((comment: ICommentData) => (
          <OtherComment
            key={uuid()}
            comment={comment}
            isMyComment={false}
            isHistory={false}
          />
        )),
    [otherComments, myUserId]
  );
};

const makeMyComments = (
  otherComments: ICommentData[] | null,
  myUserId: string
): JSX.Element[] | null => {
  return useMemo(
    () =>
      otherComments &&
      otherComments
        .filter((comment: ICommentData) => comment.userId === myUserId)
        .map((comment: ICommentData, i: number) => (
          <OtherComment
            key={uuid()}
            comment={comment}
            isMyComment
            isHistory={false}
          />
        )),
    [otherComments, myUserId]
  );
};

export default LecturePopupComments;
