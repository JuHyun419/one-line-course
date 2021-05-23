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

  return (
    <div className="lecturePopup--comments">
      {<NewComment lectureId={lectureID} />}
      {/* My comments that are picked from the other comments! */}
      {makeOtherCommentsJSXs(otherComments, myUserId, true)}
      {/* Other Comments belong to this lecture, except for the comments written by me */}
      {makeOtherCommentsJSXs(otherComments, myUserId)}
    </div>
  );
};

const initComments = (lectureID: number): IRetTypeInitComments => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFetch_QueryAllComments(lectureID));
  }, [lectureID]);

  const otherComments = useSelector(
    (state: TCombinedStates) => state.commentAsync_QueryAllComments.comments
  );

  return {
    myUserId: sessionStorage.getItem(USERID_SESSION_STORAGE_KEY)!,
    otherComments,
  };
};

const makeOtherCommentsJSXs = (
  otherComments: ICommentData[] | null,
  myUserId: string,
  isMyComment: boolean = false
) =>
  useMemo(
    () =>
      otherComments &&
      otherComments
        .filter((comment: ICommentData) => comment.userId !== myUserId)
        .map((comment: ICommentData) => (
          <OtherComment
            key={uuid()}
            comment={comment}
            isMyComment={isMyComment}
          />
        )),
    [otherComments, myUserId]
  );

export default LecturePopupComments;
