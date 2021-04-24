import React, { useCallback, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../../store";
import { toggleSearchBar } from "../../../../store/action/search";

import { getIcon } from "../../../../common";
import SearchBar from "./search-bar/SearchBar";
import { useToggleSearchBar } from "./search-bar";

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
