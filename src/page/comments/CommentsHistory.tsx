import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import OtherComment from "~/src/component/comment/OtherComment";
import { TCombinedStates } from "~/src/store";
import { ICommentData } from "~/src/typings";

import "./_CommentsHistory.scss";

const CommentsHistory = () => {
  // const allMyComments = useSelector(
  //   (state: TCombinedStates) => state.userAsync_QueryAllMyComments.comments
  // );
  // const totalMyCommentsCount = allMyComments?.length;

  // Loop through all comments count and filter by the date
  // const historyJSX: JSX.Element[] | null = useMemo(
  //   () =>
  //     allMyComments?.map((comment: ICommentData) => {
  //       const { commentID, createdAt } = comment;
  //       return (
  //         <div key={commentID}>
  //           <p className="commentsHistory--created-at">{createdAt}</p>
  //           <div className="commentsHistory--separator"></div>
  //           <div className="commentsHistory--comment">
  //             <OtherComment comment={comment} isMyComment={false} />
  //           </div>
  //         </div>
  //       );
  //     }),
  //   [allMyComments]
  // );

  const [createdAt, setCreatedAt] = useState<Date>();
  useEffect(() => {
    setCreatedAt(new Date());
  }, []);

  const historyJSX: JSX.Element[] | null = useMemo(
    () =>
      new Array(6).fill(0).map(_ => (
        <div key={uuid()} className="commentsHistory--one-day">
          <p className="commentsHistory--created-at">
            {new String(createdAt).slice(0, 25)}
          </p>
          <div className="commentsHistory--separator"></div>
          {new Array(3).fill(0).map(_ => (
            <div key={uuid()} className="commentsHistory--comment">
              <OtherComment isMyComment={false} />
            </div>
          ))}
        </div>
      )),
    [createdAt]
  );
  return <div className="commentsHistory">{historyJSX}</div>;
};

export default CommentsHistory;
