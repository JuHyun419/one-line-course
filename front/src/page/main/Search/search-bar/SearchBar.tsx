import React, { useCallback, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";

import {
  AddButton,
  SearchButton,
  ClearButton,
  useSearchBarSuggestion,
  useSearchBarSelectedKeywords,
  useSearchBarSelectedPlatforms,
  useToggleSearchBar,
} from "./";
import SearchBarInput from "./SearchBarInput";

import "./_SearchBar.scss";

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  const dispatch = useDispatch();
  const { suggestionJSX } = useSearchBarSuggestion();
  const selectedPlatformsJSX = useSearchBarSelectedPlatforms(dispatch);
  const selectedKeywordsJSX = useSearchBarSelectedKeywords(dispatch);
  const { _toggleSearchBar: toggleSearchBar } = useToggleSearchBar();

  const isInvalidKeyword = useSelector(
    (state: TCombinedStates) => state.searchBar.isInvalidKeyword,
    shallowEqual
  );

  const invalidKeywordWarningJSX = isInvalidKeyword && (
    <p className="searchBar--invalid-keyword-indicator active">
      없는
      <br />
      키워드!
      <br />
      입니다!
    </p>
  );

  return (
    <div className="searchBar">
      <SearchBarInput />
      <div onClick={toggleSearchBar}>{searchIcon}</div>
      {invalidKeywordWarningJSX}
      <AddButton />
      <SearchButton />
      <div className="searchBar--suggestions">{suggestionJSX}</div>
      <div className="searchBar--separator"></div>
      <p className="searchBar--selectedKeywords-placeholder">
        선택한 키워드들...
      </p>
      <div className="searchBar--selected">
        {selectedPlatformsJSX}
        {selectedKeywordsJSX}
      </div>
      <ClearButton />
    </div>
  );
};

export default SearchBar;
