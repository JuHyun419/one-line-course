import React, { useCallback, useMemo, useEffect, useState } from "react";
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
  isUpdated: boolean;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  lectureId?: number;
  isOnlyDisplay: boolean;
}

const LectureBookmark: React.FC<ILectureBookmarkProps> = props => {
  const bookmarkIcon = makeBookmarkIcon(props);
  return <div className="lectureCard--bookmark">{bookmarkIcon}</div>;
};

const makeBookmarkIcon = ({
  lectureId,
  isUpdated,
  setIsUpdated,
  isOnlyDisplay = true,
}: ILectureBookmarkProps) => {
  const [isBookmarkEnabled, setIsBookmarkEnabled] = useState(false);

  const dispatch = useDispatch();
  const addBookmark = useCallback(
    (userID: string, usedBookmark: IBookmarkData, afterCallback: Function) =>
      dispatch(initFetch_AddBookmark(userID, usedBookmark, afterCallback)),
    []
  );

  const deleteBookmark = useCallback(
    (target: number, afterCallback: Function) =>
      dispatch(initFetch_RemoveBookmark(target, afterCallback)),
    []
  );

  const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);

  const allMyBookmarks = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyBookmarks.bookmarks
  );

  const fetchUpdatedAllMyBookmarks = useCallback(
    async (userID: string) => dispatch(initFetch_QueryAllMyBookmarks(userID)),
    []
  );

  let usedBookmark: IBookmarkData = {
    lectureId: lectureId!,
    createdAt: new Date(),
  };

  // useEffect(() => {
  //   (async () => {
  //     if (!userID) return;
  //     if (allMyBookmarks && lectureId) {
  //       // check whether the previous bookmark exists
  //       setIsUpdated(false);

  //       await fetchUpdatedAllMyBookmarks(userID);

  //       const prvBookmark = allMyBookmarks.find(
  //         (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
  //       )!;

  //       if (!prvBookmark) {
  //         return;
  //       }
  //       // replace the previous bookmark as the current bookmark
  //       usedBookmark = prvBookmark;
  //       console.log("automatically updated my bookmarks", usedBookmark);
  //       // enable the icon
  //       setIsBookmarkEnabled(true);
  //     }
  //   })();
  // }, [isUpdated, userID]);

  const _addBookmark = useCallback(async () => {
    if (isOnlyDisplay || !userID) {
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
    await addBookmark(userID, usedBookmark, () => setIsUpdated(true));
    await fetchUpdatedAllMyBookmarks(userID);
  }, [userID, usedBookmark, allMyBookmarks]);

  const _deleteBookmark = useCallback(async () => {
    if (isOnlyDisplay || !allMyBookmarks || !lectureId || !userID) {
      return;
    }

    const targetBookmarkId: number | undefined = allMyBookmarks.find(
      (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
    )?.id;

    if (targetBookmarkId === undefined) {
      return;
    }

    console.log(targetBookmarkId, " will be deleted");

    await deleteBookmark(targetBookmarkId, () => setIsUpdated(true));
    await fetchUpdatedAllMyBookmarks(userID);
    // setTimeout(async () => {

    // }, 4000);
  }, [userID, allMyBookmarks, setIsUpdated]);

  const toggleBookmarkIcon = useCallback(() => {
    if (isOnlyDisplay) {
      return;
    }

    // console.log("bookmark icon clicked!");

    if (isBookmarkEnabled) {
      _deleteBookmark();
    } else {
      _addBookmark();
    }

    setIsBookmarkEnabled(prv => !prv);
  }, [isBookmarkEnabled, isOnlyDisplay, allMyBookmarks]);

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
