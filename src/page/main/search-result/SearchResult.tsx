import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../store";

import { initFetch_QueryAllBookmarks } from "~/src/store/action/bookmark-async/query-all-bookmarks/ActionCreators";

import GridView from "./view/GridView";
import ListView from "./view/ListView";

import "./_SearchResult.scss";
import { GridViewCtxProvider } from "~/src/context/GridViewCtx";

const SearchResult = () => {
  const isSearchSucceed = useSelector(
    (state: TCombinedStates) => state.searchResult.isSearchSucceed
  );

  const isGridView = useSelector(
    (state: TCombinedStates) => state.searchResult.isGridView
  );

  fetchBookmarks();

  return (
    <div className="searchResult">
      {
        isSearchSucceed && isGridView ? (
          <GridViewCtxProvider>
            <GridView />
          </GridViewCtxProvider>
        ) : null
        // TODO: List View!
      }
    </div>
  );
};

const fetchBookmarks = () => {
  const dispatch = useDispatch();
  const _initFetchBookmarks = useCallback(
    (userID: string) => dispatch(initFetch_QueryAllBookmarks(userID)),
    []
  );

  const userID = localStorage.getItem("userID");
  if (!userID || userID === "") {
    // throw new Error("userID is invalid!");
    return;
  }

  // fetch all my bookmarks at first!
  useEffect(() => {
    _initFetchBookmarks(userID);
  }, []);
};

export default SearchResult;
