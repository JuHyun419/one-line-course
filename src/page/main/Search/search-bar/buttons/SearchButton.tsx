import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TCombinedStates } from "../../../../../store";

import {
  EButtonSize,
  EButtonType,
  ILectureFetchResult,
} from "../../../../../typings/type";
import Button from "../../../../../component/button/Button";

import { initSearch } from "../../../../../store/action/search-result";

import "./_SearchBarButton.scss";

const SearchButton: React.FC = () => {
  const onClickSearchBtn = useOnClickSearchBtn();

  return (
    <Button
      btnSize={EButtonSize.XSmall}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--btn-search"
      additionalStyles={{ fontSize: "0.9rem" }}
      onClick={onClickSearchBtn}
    >
      검색
    </Button>
  );
};

const useOnClickSearchBtn = () => {
  const dispatch = useDispatch();
  const selectedKeywords: string[] = useSelector(
    (state: TCombinedStates) => state.search.selectedKeywords
  );

  const selectedPlatforms: string[] = useSelector(
    (state: TCombinedStates) => state.search.selectedPlatforms
  );

  const lectures: ILectureFetchResult[] = useSelector(
    (state: TCombinedStates) => state.searchAsync.lectures
  );

  // start search
  const _initSearch = useCallback(() => {
    // console.log("selected keywords ", selectedKeywords);
    // console.log("selected platforms ", selectedPlatforms);

    dispatch(initSearch(selectedPlatforms, selectedKeywords, lectures));
  }, [selectedPlatforms, selectedKeywords, lectures]);

  return useCallback((_: React.MouseEvent<HTMLDivElement>) => _initSearch(), [
    _initSearch,
  ]);
};

export default SearchButton;
