import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../store";

import SearchCtrl from "./search-ctrl/SearchCtrl";
import Loading from "../../../component/loading/Loading";

import "./_Search.scss";

const Search: React.FC = () => {
  const isSearchLoading = useSelector(
    (state: TCombinedStates) => state.searchAsync.isLoading,
    shallowEqual
  );

  // const errorJSX = useSelector(
  //   (state: TCombinedStates) => state.searchAsync.err,
  //   shallowEqual
  // );
  // if (errorJSX) {
  //   // TODO: Render Error
  // }

  return (
    <div className="search">
      {isSearchLoading ? <Loading /> : <SearchCtrl />}
    </div>
  );
};

export default Search;
