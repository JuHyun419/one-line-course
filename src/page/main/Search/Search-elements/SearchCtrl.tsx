import React, { useState, useCallback, useMemo } from "react";

import { getIcon } from "../../../../common";
import SearchBar from "./SearchBar";

import "./_SearchCtrl.scss";

const SearchCtrl: React.FC<{}> = () => {
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
    <div className="searchCtrl">
      {!isSearchBarToggled && <SearchBar searchIcon={searchIcon} />}
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

export default SearchCtrl;
