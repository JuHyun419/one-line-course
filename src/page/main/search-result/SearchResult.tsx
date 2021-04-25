import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";
import { shallowEqual, useSelector } from "react-redux";
import { TCombinedStates } from "../../../store";
import { ILectureFetchResult } from "../../../typings/type";

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

  const searchedLectures: ILectureFetchResult[] = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures
  );

  const searchedLecturesJSX = useMemo(
    () =>
      searchedLectures?.map((lec: ILectureFetchResult) => (
        <li key={uuid()}>
          {lec.title} {lec.skills[0]}
        </li>
      )),
    [searchedLectures]
  );

  const resultViewJSX = isGridView ? <GridView /> : <ListView />;

  return (
    <div className="searchResult">
      {resultViewJSX}
      {searchedLecturesJSX}
    </div>
  );
};

export default SearchResult;
