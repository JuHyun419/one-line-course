import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getIcon } from "~/src/common";
import {
  initFetch_AddBookmark,
  initFetch_RemoveBookmark,
} from "~/src/store/action/bookmark-async";

import "./_LectureBookmark.scss";

const LectureBookmark = () => {
  const { BookmarkIcon_Disabled, BookmarkIcon_Enabled } = makeBookmarkIcon();

  return <div className="lectureCard--bookmark">{BookmarkIcon_Disabled}</div>;
};

const makeBookmarkIcon = () => {
  const [isBookmarkEnabled, setIsBookmarkEnabled] = useState(false);
  const dispatch = useDispatch();

  const userID = localStorage.getItem("userID");
  if (!userID || userID === "") {
    // console.error("userID is invalid!");
  }

  // const _addBookmark = useCallback(() => dispatch(initFetch_AddBookmark()), []);
  // const _removeBookmark = useCallback(
  //   () => dispatch(initFetch_RemoveBookmark()),
  //   []
  // );

  const onClickBookmarkIcon = useCallback(() => {
    if (isBookmarkEnabled) {
    } else {
    }
    setIsBookmarkEnabled(prv => !prv);
  }, [isBookmarkEnabled, setIsBookmarkEnabled]);

  const BookmarkIcon_Disabled = useMemo(
    () => getIcon("BookmarkIcon_Disabled", onClickBookmarkIcon),
    [onClickBookmarkIcon]
  );

  const BookmarkIcon_Enabled = useMemo(
    () => getIcon("BookmarkIcon_Enabled", onClickBookmarkIcon),
    [onClickBookmarkIcon]
  );

  return {
    BookmarkIcon_Enabled,
    BookmarkIcon_Disabled,
  };
};

export default LectureBookmark;
