import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "~/src/store";

import "./_SearchResultSummary.scss";

const SearchResultSummary = () => {
  const selectedKeywords = useSelector(
    (state: TCombinedStates) => state.search.selectedKeywords
  );

  const selectedPlatforms = useSelector(
    (state: TCombinedStates) => state.search.selectedPlatforms
  );

  const searchResultCount = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures.length,
    shallowEqual
  );

  const selectedKeywordsJSX = useMemo(
    () =>
      selectedKeywords?.map((keyword: string) => (
        <li key={uuid()} className="searchResult-summary--keyword">
          {keyword}
        </li>
      )),
    [selectedKeywords]
  );

  const selectedPlatformsJSX = useMemo(
    () =>
      selectedPlatforms?.map((platform: string) => (
        <li key={uuid()} className="searchResult-summary--platform">
          {platform}
        </li>
      )),
    [selectedPlatforms]
  );

  return (
    <div className="searchResult-summary">
      <div>
        <ul>{selectedPlatformsJSX}</ul>
      </div>
      <br />
      <div>
        <ul>{selectedKeywordsJSX}</ul>
        <span> 으로 찾은 결과</span>
      </div>
      <div>
        총 
        <span className="searchResult-summary--lectures-count">
          {searchResultCount}
        </span>
        개 입니다.
      </div>
    </div>
  );
};

export default SearchResultSummary;
