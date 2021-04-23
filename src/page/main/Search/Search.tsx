import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { initFetch_RetrieveLectures } from "../../../store/action/search-async";
import KeywordSelectorCtrl from "../Keyword-selector/KeywordSelectorCtrl";
import SearchCtrl from "./Search-elements/SearchCtrl";

import "./_Search.scss";

const Search: React.FC<{}> = () => {
  useInitFetch();
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
