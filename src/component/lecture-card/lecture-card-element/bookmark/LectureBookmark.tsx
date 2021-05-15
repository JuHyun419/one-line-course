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
  const addBookmark = useCallback(
    (userID: string, usedBookmark: IBookmarkData) =>
      dispatch(initFetch_AddBookmark(userID, usedBookmark)),
    []
  );

  const deleteBookmark = useCallback(
    (targetBookmarkId: number) =>
      dispatch(initFetch_RemoveBookmark(targetBookmarkId)),
    []
  );

  // const _addBookmark = useCallback(() => dispatch(initFetch_AddBookmark()), []);
  // const _removeBookmark = useCallback(
  //   () => dispatch(initFetch_RemoveBookmark()),
  //   []
  // );

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

  useEffect(() => {
    // update bookmarks automatically
    (async () => {
      // console.log("effect");

      // if (!isUpdated) {
      //   return;
      // }

      // check whether the previous bookmark exists
      setIsUpdated(false);
      // fetch new all my bookmarks
      await fetchUpdatedAllMyBookmarks(userID!);

      // console.log("fetched new all my bookmarks", allMyBookmarks);

      // check whether there is a existing bookmark
      const updated = allMyBookmarks?.find(
        (bookmark: IBookmarkData) => bookmark.lectureId === lectureId
      )!;
      // console.log("updated bookmark", updated);

      if (!updated) {
        setIsBookmarkEnabled(false);
        return;
      }

      // replace the previous bookmark as the current bookmark
      usedBookmark = updated;

      console.log("automatically updated my bookmarks", usedBookmark);

      // enable the icon
      setIsBookmarkEnabled(true);
    })();
  }, [
    isUpdated,
    setIsUpdated,
    setIsBookmarkEnabled,
    fetchUpdatedAllMyBookmarks,
  ]);

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
    await addBookmark(userID, usedBookmark);
    await fetchUpdatedAllMyBookmarks(userID);
    setIsUpdated(true);
  }, [userID, usedBookmark, allMyBookmarks, setIsUpdated]);

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

    await deleteBookmark(targetBookmarkId);
    await fetchUpdatedAllMyBookmarks(userID);
    setIsUpdated(true);
  }, [userID, allMyBookmarks, setIsUpdated]);

  const toggleBookmarkIcon = useCallback(() => {
    if (isOnlyDisplay) {
      return;
    }

    // console.log("bookmark icon clicked!");

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
