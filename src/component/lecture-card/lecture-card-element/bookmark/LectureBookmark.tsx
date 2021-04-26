import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getIcon } from "~/src/common";

import "./_LectureBookmark.scss";

const LectureBookmark = () => {
  const { BookmarkIcon_Disabled, BookmarkIcon_Enabled } = makeBookmarkIcon();

  return <div className="lectureCard--bookmark"></div>;
};

const makeBookmarkIcon = () => {
  const dispatch = useDispatch();
  // const _toggleBookmark = useCallback(() => dispatch(tooggleBookmark()), []);
  const onClickBookmarkIcon = useCallback(() => {
    // toggle bookmark
  }, []);

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
