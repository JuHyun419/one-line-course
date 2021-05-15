import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USERID_SESSION_STORAGE_KEY } from "~/src/common";
import { TCombinedStates } from "~/src/store";
import { initFetch_QueryAllMyBookmarks } from "~/src/store/action/user-async";
import { IBookmarkData } from "~/src/typings";

interface IBookmarkHistoryElementProps {}

const BookmarkHistoryElement: React.FC = () => {
  const userID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
  const dispatch = useDispatch();
  const allMyBookmarks = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyBookmarks.bookmarks
  );
  const fetchUpdatedAllMyBookmarks = useCallback(
    async (userID: string) => dispatch(initFetch_QueryAllMyBookmarks(userID)),
    []
  );

  useEffect(() => {
    // update bookmarks initially
    (async () => {
      if (!userID || !allMyBookmarks) {
        // check the prerequisites are valid
        return;
      }

      // fetch new all my bookmarks
      await fetchUpdatedAllMyBookmarks(userID);

      console.log("initially updated my bookmarks", allMyBookmarks);
    })();
  }, []);

  return <div></div>;
};

export default BookmarkHistoryElement;
