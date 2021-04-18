import React from "react";
import { Button, EButtonSize, EButtonType } from "../../../../component/button";

const SearchBarContents: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  return (
    <div className="searchBar-contents">
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
        Search
      </Button>
      <div className="searchBar--separator"></div>
      <div></div>
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        additionalClassName="searchBar--clearBtn"
      >
        Clear
      </Button>
    </div>
  );
};

export default SearchBarContents;
