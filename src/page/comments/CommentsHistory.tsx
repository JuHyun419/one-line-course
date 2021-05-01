import React, { Fragment, useMemo } from "react";
import { useSelector } from "react-redux";
import OtherComment from "~/src/component/comment/OtherComment";
import { TCombinedStates } from "~/src/store";
import { ICommentData } from "~/src/typings";

import "./_CommentsHistories.scss";

const CommentsHistory = () => {
  const allMyComments = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyComments.comments
  );
  // const totalMyCommentsCount = allMyComments?.length;

  // Loop through all comments count and filter by the date
  const historyJSX: JSX.Element[] | null = useMemo(
    () =>
      allMyComments?.map((comment: ICommentData) => {
        const { commentID, createdAt } = comment;
        return (
          <div key={commentID}>
            <p className="commentsHistory--created-at">{createdAt}</p>
            <div className="commentsHistory--separator"></div>
            <div className="commentsHistory--comment">
              <OtherComment comment={comment} isMyComment={false} />
            </div>
          </div>
        );
      }),
    [allMyComments]
  );
  return <div className="commentsHistory">{historyJSX}</div>;
};

export default CommentsHistory;
