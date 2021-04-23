import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../store";

import { initFetch_RetrieveLectures } from "../../../store/action/search-async";

import KeywordSelectorCtrl from "./Keyword-selector/KeywordSelectorCtrl";
import SearchCtrl from "./Search-elements/SearchCtrl";
import Loading from "../../../component/loading/Loading";

import "./_Search.scss";

const Search: React.FC<{}> = () => {
  useInitFetch();

  const loadingJSX = useSelector(
    (state: TCombinedStates) => state.searchAsync.isLoading,
    shallowEqual
  );
  if (loadingJSX) {
    return <Loading />;
  }

  // const errorJSX = useSelector(
  //   (state: TCombinedStates) => state.searchAsync.err,
  //   shallowEqual
  // );
  // if (errorJSX) {
  //   // TODO: Render Error
  // }

  return (
    <div className="search">
      <SearchCtrl />
      <KeywordSelectorCtrl />
    </div>
  );
};

const useInitFetch = () => {
  const dispatch = useDispatch();
  const _initFetch = useCallback(() => dispatch(initFetch_RetrieveLectures()), [
    dispatch,
  ]);

  useEffect(() => {
    _initFetch();
  }, []);
};

export default Search;
