import React, { useState, useCallback, useMemo } from "react";

import { getIcon } from "../../../../common/Icons";
import SearchBarContents from "./SearchBarContents";

import "./_SearchBar.scss";

const SearchBar: React.FC<{}> = () => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(true);

  const toggleSearchBar = useCallback(
    () => setIsSearchBarToggled(prv => !prv),
    [setIsSearchBarToggled]
  );

  const searchIcon: JSX.Element = useMemo(
    () => getIcon("Search", toggleSearchBar, { fontSize: "2rem" })!,
    []
  );

  return (
    <div className="searchBarPlacer">
      {!isSearchBarToggled && <SearchBarContents searchIcon={searchIcon} />}
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
