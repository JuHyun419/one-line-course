import React from "react";
import { EButtonSize, EButtonType } from "../../../../../typings/type";
import Button from "../../../../../component/button/Button";

import {
  useSearchBarSuggestion,
  useSearchBarSelectedKeywords,
  useSearchBarSelectedPlatforms,
} from "./";
import "./_SearchBar.scss";

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  const { onSearchBarInputChange, suggestionJSX } = useSearchBarSuggestion();
  const selectedPlatformsJSX = useSearchBarSelectedPlatforms();
  const selectedKeywordsJSX = useSearchBarSelectedKeywords();

  const searchBarInputJSX = (
    <input
      type="text"
      className="searchBar--input"
      placeholder="키워드를 입력해서 강의를 찾으세요"
      onChange={onSearchBarInputChange}
    />
  );

  const { addBtnJSX, searchBtnJSX, clearBtnJSX } = makeBtns();

  return (
    <div className="searchBar">
      {searchBarInputJSX}
      {searchIcon}
      {addBtnJSX}
      {searchBtnJSX}
      <div className="searchBar--suggestions">{suggestionJSX}</div>
      <div className="searchBar--separator"></div>
      <p className="searchBar--selectedKeywords-placeholder">
        선택한 키워드들...
      </p>
      <div className="searchBar--selected">
        {selectedPlatformsJSX}
        {selectedKeywordsJSX}
      </div>
      {clearBtnJSX}
    </div>
  );
};

const makeBtns = () => {
  const addBtnJSX = (
    <Button
      btnSize={EButtonSize.Small}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--btn-add"
    >
      추가
    </Button>
  );

  const searchBtnJSX = (
    <Button
      btnSize={EButtonSize.XSmall}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--btn-search"
      additionalStyles={{ fontSize: "0.9rem" }}
    >
      검색
    </Button>
  );

  const clearBtnJSX = (
    <Button
      btnSize={EButtonSize.Small}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--clearBtn"
    >
      비우기
    </Button>
  );

  return { addBtnJSX, searchBtnJSX, clearBtnJSX };
};

export default SearchBar;
