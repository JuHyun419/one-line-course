import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcon, USERID_SESSION_STORAGE_KEY } from "~/src/common";
import { TCombinedStates } from "~/src/store";
import {
  initFetch_AddBookmark,
  initFetch_RemoveBookmark,
} from "~/src/store/action/bookmark-async";
import { initFetch_QueryAllMyBookmarks } from "~/src/store/action/user-async";
import { IBookmarkData } from "~/src/typings";

import "./_LectureBookmark.scss";

interface ILectureBookmarkProps {
  lectureId?: number;
  isOnlyDisplay: boolean;
}

const LectureBookmark: React.FC<ILectureBookmarkProps> = ({
                                                            lectureId,
                                                            isOnlyDisplay = true
                                                          }) => {
  const dispatch = useDispatch();
  const [ isBookmarkEnabled, setIsBookmarkEnabled ] = useState(false);

  const addBookmark = (userID: string, usedBookmark: IBookmarkData) =>
    dispatch(initFetch_AddBookmark(userID, usedBookmark));
  const deleteBookmark = (targetBookmarkId: number) =>
    dispatch(initFetch_RemoveBookmark(targetBookmarkId));
  const allMyBookmarks = useSelector((state: TCombinedStates) => state.userAsync_QueryAllMyBookmarks.bookmarks);
  const fetchUpdatedAllMyBookmarks = async (userID: string) => dispatch(initFetch_QueryAllMyBookmarks(userID));

  let usedBookmark: IBookmarkData = {
    lectureId: lectureId!,
    createdAt: new Date(),
  };

  useEffect(() => {
    (async () => {
      if (!allMyBookmarks) {
        return;
      }

      if (!lectureId) {
        return;
      }

      // check whether the previous bookmark exists
      // setIsUpdated(false);
      const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
      if (!userID) {
        return;
      }

      await fetchUpdatedAllMyBookmarks(userID);

      const prvBookmark = allMyBookmarks.find(
        (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
      )!;

      if (!prvBookmark) {
        return;
      }
      // replace the previous bookmark as the current bookmark
      usedBookmark = prvBookmark;

//      console.log("automatically updated my bookmarks", usedBookmark);
      // enable the icon
      setIsBookmarkEnabled(true);
    })();
  }, [ allMyBookmarks ]);

  const _addBookmark = async () => {
    if (isOnlyDisplay) {
      return;
    }

    const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (!userID) {
      return;
    }

    await fetchUpdatedAllMyBookmarks(userID);

    if (allMyBookmarks) {
      console.log("all my compared bookmarks", allMyBookmarks, lectureId);

      const prv = allMyBookmarks?.filter(
        (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
      );

      if (prv.length > 0) {
        console.log("previous bookmark exists, before adding a bookmark", prv);
        return;
      }
    }
    await addBookmark(userID, usedBookmark);
    await fetchUpdatedAllMyBookmarks(userID);
    // setIsUpdated(true);
  };

  const _deleteBookmark = async () => {
    if (isOnlyDisplay) {
      return;
    }

    if (!lectureId) {
      return;
    }

    if (!allMyBookmarks) {
      return;
    }

    const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (!userID) {
      return;
    }

    const targetBookmarkId = allMyBookmarks.find((bookmark) => bookmark.lectureId === lectureId)?.id;
    if (targetBookmarkId === undefined) {
      return;
    }

    await deleteBookmark(targetBookmarkId);
    await fetchUpdatedAllMyBookmarks(userID);
    // setIsUpdated(true);
  };

  const toggleBookmarkIcon = () => {
    if (isOnlyDisplay) {
      return;
    }

    if (isBookmarkEnabled) {
      _deleteBookmark();
    }
    else {
      _addBookmark();
    }

    setIsBookmarkEnabled(prv => !prv);
  };

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

  return (
    <div
      className="lectureCard--bookmark">
      {isBookmarkEnabled ? BookmarkIcon_Enabled : BookmarkIcon_Disabled}</div>
  );
};

export default LectureBookmark;
