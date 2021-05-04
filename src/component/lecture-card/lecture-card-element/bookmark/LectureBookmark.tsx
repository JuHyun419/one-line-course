import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcon, USERID_SESSION_STORAGE_KEY } from "~/src/common";
import { TCombinedStates } from "~/src/store";
import {
  initFetch_AddBookmark,
  initFetch_RemoveBookmark,
} from "~/src/store/action/bookmark-async";
import { IBookmarkData } from "~/src/typings";

import "./_LectureBookmark.scss";

interface ILectureBookmarkProps {
  bookmark: IBookmarkData;
}

const LectureBookmark: React.FC<ILectureBookmarkProps> = ({ bookmark }) => {
  const bookmarkIcon = makeBookmarkIcon(bookmark);

  return <div className="lectureCard--bookmark">{bookmarkIcon}</div>;
};

const makeBookmarkIcon = (bookmark: IBookmarkData) => {
  const [isBookmarkEnabled, setIsBookmarkEnabled] = useState(false);
  const dispatch = useDispatch();
  const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
  const createdBookmark = useSelector(
    (state: TCombinedStates) => state.bookmarkAsync_AddBookmark.createdBookmark
  );

  const _addBookmark = useCallback(
    () => dispatch(initFetch_AddBookmark(userID!, bookmark)),
    [userID, bookmark]
  );

  const _removeBookmark = useCallback(
    () => dispatch(initFetch_RemoveBookmark(createdBookmark!.id)),
    [bookmark, createdBookmark]
  );

  const toggleBookmarkIcon = useCallback(() => {
    setIsBookmarkEnabled((prv: boolean) => {
      if (prv) {
        _removeBookmark();
      } else {
        _addBookmark();
      }
      return !prv;
    });
  }, [setIsBookmarkEnabled, _removeBookmark, _addBookmark]);

  const BookmarkIcon_Disabled = getIcon(
    "Bookmark-Disabled",
    toggleBookmarkIcon,
    {
      fontSize: "2rem",
    }
  );

  const BookmarkIcon_Enabled = getIcon("Bookmark-Enabled", toggleBookmarkIcon, {
    fontSize: "2rem",
  });

  return isBookmarkEnabled ? BookmarkIcon_Enabled! : BookmarkIcon_Disabled!;
};

export default LectureBookmark;
