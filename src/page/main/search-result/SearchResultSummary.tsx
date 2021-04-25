import React, { useMemo } from "react";
import { useSelector } from "react-redux";
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
        <span>&nbsp;에서,</span>
      </div>
      <br />
      <div>
        <ul>{selectedKeywordsJSX}</ul>
        <span>&nbsp;로 찾은 결과입니다.</span>
      </div>
    </div>
  );
};

export default SearchResultSummary;
