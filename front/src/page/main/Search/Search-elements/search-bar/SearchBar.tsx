import React from "react";
import { v4 as uuid } from "uuid";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { EButtonSize, EButtonType } from "../../../../../typings/type";
import Button from "../../../../../component/button/Button";

import "./_SearchBar.scss";

import { useSuggestion } from "./useSuggestion";
import { TCombinedStates } from "~store";
import { useSelector } from "react-redux";

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  const onSearchBarInputChange = useSuggestion();

  const suggestions = useSelector(
    (state: TCombinedStates) => state.search.suggestions
  );
  const selectedKeywords = useSelector(
    (state: TCombinedStates) => state.search.selectedKeywords
  );
  const selectedPlatforms = useSelector(
    (state: TCombinedStates) => state.search.selectedPlatforms
  );

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
      {/* 검색 제안 */}
      <div className="searchBar--suggestions">
        {suggestions?.map(sug => (
          <li key={uuid()}>{sug}</li>
        ))}
      </div>
      <div className="searchBar--separator"></div>
      <p>선택한 키워드들...</p>
      <div className="searchBar--selected">
        {selectedPlatforms?.map(platform => (
          <li key={uuid()}>{platform}</li>
        ))}
        {selectedKeywords?.map(keyword => (
          <li key={uuid()}>{keyword}</li>
        ))}
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
