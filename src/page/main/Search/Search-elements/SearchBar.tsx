import React from "react";

import { Button, EButtonSize, EButtonType } from "../../../../component/button";
import { SelectedKeywords } from "../../Search-keyword/";

import "./_SearchBar.scss";

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  return (
    <div className="searchBar">
      {/* TODO:  */}
      <input
        type="text"
        className="searchBar--input"
        placeholder="키워드를 입력해서 강의를 찾으세요"
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
