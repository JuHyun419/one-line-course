import React, { useMemo } from "react";

import {
  AddButton,
  SearchButton,
  ClearButton,
  useSearchBarSuggestion,
  useSearchBarSelectedKeywords,
  useSearchBarSelectedPlatforms,
  useToggleSearchBar,
} from "./";

import "./_SearchBar.scss";

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  const { onSearchBarInputChange, suggestionJSX } = useSearchBarSuggestion();
  const selectedPlatformsJSX = useSearchBarSelectedPlatforms();
  const selectedKeywordsJSX = useSearchBarSelectedKeywords();
  const { _toggleSearchBar: toggleSearchBar } = useToggleSearchBar();

  const searchBarInputJSX = useMemo(
    () => (
      <input
        type="text"
        className="searchBar--input"
        placeholder="키워드를 입력해서 강의를 찾으세요"
        onChange={onSearchBarInputChange}
      />
    ),
    [onSearchBarInputChange]
  );

  return (
    <div className="searchBar">
      {searchBarInputJSX}
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
