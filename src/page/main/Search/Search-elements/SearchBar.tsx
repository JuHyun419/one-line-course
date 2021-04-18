import React, { useState, useCallback, useMemo } from "react";

import Button from "../../../../component/button/Button";
import { EButtonSize } from "../../../../component/button/EButtonSize";
import { EButtonType } from "../../../../component/button/EButtonType";

import { getIcon } from "../../../../common/Icons";

import "./_SearchBar.scss";

const SearchBar: React.FC<{}> = () => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(true);
  const toggleSearchBar = useCallback(
    () => setIsSearchBarToggled(prv => !prv),
    [setIsSearchBarToggled]
  );

  const searchIcon = useMemo(
    () => getIcon("Search", toggleSearchBar, { fontSize: "2rem" }),
    []
  );

  const inputContentsJSX = !isSearchBarToggled ? (
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
      <div>
      </div>
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        additionalClassName="searchBar--clearBtn"
      >
        Clear
      </Button>
    </div>
  ) : null;

  return (
    <div className="searchBarPlacer">
      {inputContentsJSX}
      <button
        className={
          isSearchBarToggled ? "searchBar-toggle" : "searchBar-toggle active"
        }
      >
        {searchIcon}
      </button>
    </div>
  );
};

export default SearchBar;
