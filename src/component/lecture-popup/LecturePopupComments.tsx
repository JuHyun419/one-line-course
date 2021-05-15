import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "~/src/store";
import { initFetch_QueryAllComments } from "~/src/store/action/comment-async";
import { ICommentData } from "~/src/typings";
import NewComment from "../comment/NewComment";
import OtherComment from "../comment/OtherComment";

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

  // TODO: 3. Other Comments belong to this lecture
  // const otherCommentsJSX: JSX.Element[] | null = useMemo(
  //   () =>
  //     otherComments &&
  //     user &&
  //     new Array(otherComments.length)
  //       .fill(0)
  //       .map((comment: ICommentData) => (
  //         <OtherComment
  //           key={comment.commentID}
  //           comment={comment}
  //           isMyComment={false}
  //         />
  //       )),
  //   [user, otherComments]
  // );
  const otherCommentsJSX: JSX.Element[] | null = useMemo(
    () =>
      new Array(5)
        .fill(0)
        .map((comment: ICommentData) => (
          <OtherComment key={uuid()} comment={comment} isMyComment={false} />
        )),
    []
  );

  return (
    <div className="lecturePopup--comments">
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

const makeNewComment = (lectureID: number): JSX.Element | null =>
  useMemo(() => <NewComment lectureID={lectureID} />, []);

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
          <OtherComment key={uuid()} comment={comment} isMyComment={false} />
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
          <OtherComment key={uuid()} comment={comment} isMyComment />
        )),
    [otherComments, myUserId]
  );
};

export default LecturePopupComments;
