import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { TCombinedStates } from "~store";

import GridView from "./view/GridView";
import ListView from "./view/ListView";

import "./_SearchResult.scss";

const SearchResult = () => {
  const isSearchStarted = useSelector(
    (state: TCombinedStates) => state.searchResult.isSearchStarted,
    shallowEqual
  );

  if (isSearchStarted) {
    return <div className="searchResult"></div>;
  }

  const isGridView = useSelector(
    (state: TCombinedStates) => state.searchResult.isGridView,
    shallowEqual
  );

  const resultViewJSX = isGridView ? <GridView /> : <ListView />;

  return <div className="searchResult">{resultViewJSX}</div>;
};

export default SearchResult;
