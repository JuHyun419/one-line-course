import React from "react";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { EButtonSize, EButtonType } from "../../../../typings/type";
import Button from "../../../../component/button/Button";

import { SelectedKeywords } from "../../Search-keyword/";

import "./_SearchBar.scss";

import { useSuggestion } from "./Suggestion";

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  const onSearchBarInputChange = useSuggestion();

  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBar--input"
        placeholder="키워드를 입력해서 강의를 찾으세요"
        onChange={onSearchBarInputChange}
      />
      {searchIcon}
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        additionalClassName="searchBar--btn"
      >
        검색
      </Button>
      <div className="searchBar--separator"></div>
      <p>선택한 키워드들...</p>
      <div>
        <SelectedKeywords />
      </div>
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        additionalClassName="searchBar--clearBtn"
      >
        비우기
      </Button>
    </div>
  );
};

export default SearchBar;
