import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import OtherComment from "~/src/component/comment/OtherComment";
import GridLectureCard from "~/src/component/lecture-card/GridLectureCard";
import { TCombinedStates } from "~/src/store";
import { IBookmarkData, ICommentData } from "~/src/typings";

import "./_BookmarksHistory.scss";

const BookmarksHistory = () => {
  const allMyBookmarks = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyBookmarks.bookmarks
  );

  // const [createdAt, setCreatedAt] = useState<Date>();
  // useEffect(() => {
  //   setCreatedAt(new Date());
  // }, []);

  const historyJSX: JSX.Element[] | null = useMemo(
    () =>
      allMyBookmarks && allMyBookmarks.map((bookmark: IBookmarkData) => (
        <div key={uuid()} className="bookmarksHistory--one-day">
          <p className="bookmarksHistory--created-at">
            {new String(bookmark.createdAt).slice(0, 25)}
          </p>
          <div className="bookmarksHistory--separator"></div>
          {new Array(3).fill(0).map(_ => (
            <div key={uuid()} className="bookmarksHistory--bookmark">
              <GridLectureCard lectureIdx={bookmark.lectureId} />
            </div>
          ))}
        </div>
      )),
    [allMyBookmarks]
  );

  return <div className="bookmarksHistory">{historyJSX}</div>;
};

export default BookmarksHistory;
