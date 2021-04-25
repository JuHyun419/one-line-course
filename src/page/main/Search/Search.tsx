import React, { Fragment, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../store";

import { initFetch_RetrieveLectures } from "../../../store/action/search-async";

import SearchCtrl from "./search-ctrl/SearchCtrl";
import Loading from "../../../component/loading/Loading";

import "./_Search.scss";

const Search: React.FC<{}> = () => {
  useInitFetch();

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

const useInitFetch = () => {
  const dispatch = useDispatch();
  const _initFetch = useCallback(
    () => dispatch(initFetch_RetrieveLectures()),
    []
  );

  useEffect(() => {
    _initFetch();
  }, []);
};

export default Search;
