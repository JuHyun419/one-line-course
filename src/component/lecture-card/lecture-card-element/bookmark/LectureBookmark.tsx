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
}

let timer: NodeJS.Timeout;

const LectureBookmark: React.FC<ILectureBookmarkProps> = props => {
  const bookmarkIcon = makeBookmarkIcon(props);
  return <div className="lectureCard--bookmark">{bookmarkIcon}</div>;
};

const makeBookmarkIcon = ({
  lectureId,
  isUpdated,
  setIsUpdated,
}: ILectureBookmarkProps) => {
  const [isBookmarkEnabled, setIsBookmarkEnabled] = useState(false);

  const dispatch = useDispatch();
  const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);

  const allMyBookmarks = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyBookmarks.bookmarks
  );

  const fetchUpdatedAllMyBookmarks = useCallback(() => {
    dispatch(initFetch_QueryAllMyBookmarks(userID!));
  }, []);

  let usedBookmark: IBookmarkData = {
    lectureId: lectureId!,
    createdAt: new Date(),
  };
  fetchUpdatedAllMyBookmarks;

  useEffect(() => {
    (async () => {
      if (allMyBookmarks && lectureId) {
        // check whether the previous bookmark exists
        setIsUpdated(false);

        fetchUpdatedAllMyBookmarks();

        timer = setTimeout(() => {}, 1000);

        const prvBookmark = allMyBookmarks.find(
          (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
        )!;

        if (!prvBookmark) {
          return;
        }
        // replace the previous bookmark as the current bookmark
        usedBookmark = prvBookmark;
        console.log("prv bookmark", usedBookmark);
        // enable the icon
        setIsBookmarkEnabled(true);
      }
    })();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isUpdated]);

  const _addBookmark = useCallback(() => {
    if (!userID) {
      return;
    }

    if (allMyBookmarks) {
      console.log("all my compared bookmarks", allMyBookmarks, lectureId);

      const prv = allMyBookmarks?.filter(
        (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
      );
      console.log("previous bookmarks exist, before adding a bookmark", prv);

      if (prv.length > 0) {
        return;
      }
    }

    dispatch(
      initFetch_AddBookmark(userID, usedBookmark, () => setIsUpdated(true))
    );
    console.log("bookmark added!", usedBookmark);
  }, [userID, usedBookmark, allMyBookmarks, setIsUpdated]);

  const _removeBookmark = useCallback(() => {
    if (!allMyBookmarks || !lectureId) {
      return;
    }
    console.log("bookmark deleted!", allMyBookmarks, lectureId);
    return dispatch(
      initFetch_RemoveBookmark(
        allMyBookmarks.find(
          (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
        )?.id!,
        () => setIsUpdated(true)
      )
    );
  }, [allMyBookmarks, setIsUpdated]);

  const toggleBookmarkIcon = useCallback(() => {
    setIsBookmarkEnabled((prv: boolean) => {
      if (prv) {
        _removeBookmark();
      } else {
        _addBookmark();
      }
      return !prv;
    });
  }, []);

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
