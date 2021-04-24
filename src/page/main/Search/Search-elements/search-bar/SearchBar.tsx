import React, { useCallback, useMemo, useState } from "react";
// import { shallowEqual, useSelector } from "react-redux";
// import { TCombinedStates } from "~store";

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
  const { suggestionJSX } = useSearchBarSuggestion();
  const selectedPlatformsJSX = useSearchBarSelectedPlatforms();
  const selectedKeywordsJSX = useSearchBarSelectedKeywords();
  const { _toggleSearchBar: toggleSearchBar } = useToggleSearchBar();

  return (
    <div className="searchBar">
      <SearchBarInput />
      <div onClick={toggleSearchBar}>{searchIcon}</div>
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
