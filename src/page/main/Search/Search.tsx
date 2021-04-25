import React, { Fragment, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../store";
import { EMenuMode } from "../../../typings/type";

import { initFetch_RetrieveLectures } from "../../../store/action/search-async";

import KeywordSelectorCtrl from "./Keyword-selector/KeywordSelectorCtrl";
import SearchCtrl from "./Search-elements/SearchCtrl";
import Loading from "../../../component/loading/Loading";
import Menu from "../../../component/menu/Menu";

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
      {isSearchLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <SearchCtrl />
          <KeywordSelectorCtrl />
          <div className="search--menu">
            <Menu menuMode={EMenuMode.AfterLogin} />
          </div>
        </Fragment>
      )}
      {/* Search Result */}
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
