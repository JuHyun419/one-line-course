import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { TCombinedStates } from "~/src/store";
import { ICommentData } from "~/src/typings";

import OtherComment from "~/src/component/comment/OtherComment";

import "./_CommentsHistory.scss";

const CommentsHistory = () => {
  const allMyComments = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyComments.comments
  );

  const allDatesYMD = useMemo(
    () =>
      allMyComments &&
      // make unique array
      Array.from(
        new Set(
          allMyComments.map((comment: ICommentData) =>
            comment.createdAt!.toString().slice(0, 10)
          )
        )
      ),
    [allMyComments]
  );

  // Loop through all comments count and filter by the date
  const historyJSX: JSX.Element[] | null = useMemo(
    () =>
      allDatesYMD &&
      allMyComments &&
      allDatesYMD.map((date: string) => (
        <div key={uuid()}>
          <p className="commentsHistory--created-at">{date}</p>
          <div className="commentsHistory--separator"></div>
          {allMyComments
            .filter((comment: ICommentData) => {
              const comparerYMD = comment.createdAt!.toString().slice(0, 10);
              return comparerYMD === date;
            })
            .map((comment: ICommentData) => (
              <OtherComment
                key={comment.id}
                comment={comment}
                isMyComment={true}
              />
            ))}
        </div>
      )),
    [allMyComments, allDatesYMD]
  );
  return <div className="commentsHistory">{historyJSX}</div>;
};

export default CommentsHistory;
