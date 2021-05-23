import React, { useMemo } from "react";
import { toggleSearchBar } from "../../../../store/action/search-bar";

import { getIcon } from "../../../../common";
import SearchBar from "../search-bar/SearchBar";
import { useToggleSearchBar } from "../search-bar";

import "./_SearchCtrl.scss";

const SearchCtrl: React.FC<{}> = () => {
  const { isSearchBarClosed, _toggleSearchBar } = useToggleSearchBar();

  const searchIconJSX = getIcon("Search", toggleSearchBar, {
    fontSize: "2rem",
  })!;

  return (
    <div className="searchCtrl">
      {!isSearchBarClosed && <SearchBar searchIcon={searchIconJSX!} />}
      <button
        className={
          isSearchBarClosed ? "searchBar-toggle" : "searchBar-toggle active"
        }
        onClick={_toggleSearchBar}
      >
        {getIcon("Search", toggleSearchBar, { fontSize: "2rem" })}
      </button>
    </div>
  );
};

export default SearchCtrl;
