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
  initComments(lectureID);

  // const user = useSelector((state: TCombinedStates) => state.user.user);

  const myComments = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyComments.comments
  );
  const otherComments = useSelector(
    (state: TCombinedStates) => state.commentAsync_QueryAllComments.comments
  );

  const newCommentJSX: JSX.Element | null = useMemo(() => <NewComment />, []);

  const myCommentsJSX: JSX.Element[] | null = useMemo(
    () =>
      myComments &&
      myComments.map((comment: ICommentData) => (
        <OtherComment key={uuid()} comment={comment} isMyComment />
      )),
    [myComments]
  );
  // const myCommentsJSX: JSX.Element[] | null = useMemo(
  //   () =>
  //     new Array(5)
  //       .fill(0)
  //       .map((comment: ICommentData) => (
  //         <OtherComment key={uuid()} comment={comment} isMyComment />
  //       )),
  //   []
  // );

  // TODO: 3. Other Comments belong to this lecture
  const otherCommentsJSX: JSX.Element[] | null = useMemo(
    () =>
      otherComments &&
      otherComments.map((comment: ICommentData) => (
        <OtherComment key={uuid()} comment={comment} isMyComment={false} />
      )),
    [otherComments]
  );
  // const otherCommentsJSX: JSX.Element[] | null = useMemo(
  //   () =>
  //     new Array(5)
  //       .fill(0)
  //       .map((comment: ICommentData) => (
  //         <OtherComment key={uuid()} comment={comment} isMyComment={false} />
  //       )),
  //   []
  // );

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

export default LecturePopupComments;
