import React, { useState, useCallback, useMemo } from "react";
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
    <div className="inputContents">
      <input
        type="text"
        className={"searchBar"}
        placeholder="키워드를 입력해서 강의를 찾으세요"
      />
      {searchIcon}
    </div>
  ) : null;

  return (
    <div className="searchBarPlacer">
      {inputContentsJSX}
      <button
        className={
          isSearchBarToggled ? "searchBar--btn" : "searchBar--btn active"
        }
      >
        {searchIcon}
      </button>
    </div>
  );
};

export default SearchBar;
