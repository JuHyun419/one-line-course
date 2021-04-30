import React, { useMemo } from "react";
import { toggleSearchBar } from "../../../../store/action/search-bar";

import { getIcon } from "../../../../common";
import SearchBar from "../search-bar/SearchBar";
import { useToggleSearchBar } from "../search-bar";

import "./_SearchCtrl.scss";

const SearchCtrl: React.FC<{}> = () => {
  const { isSearchBarClosed, _toggleSearchBar } = useToggleSearchBar();

  const searchIcon: JSX.Element = useMemo(
    () => getIcon("Search", toggleSearchBar, { fontSize: "2rem" })!,
    []
  );

  return (
    <div className="searchCtrl">
      {!isSearchBarClosed && <SearchBar searchIcon={searchIcon} />}
      <button
        className={
          isSearchBarClosed ? "searchBar-toggle" : "searchBar-toggle active"
        }
        onClick={_toggleSearchBar}
      >
        {searchIcon}
      </button>
    </div>
  );
};

export default SearchCtrl;
