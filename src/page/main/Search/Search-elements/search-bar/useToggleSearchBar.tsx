import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  closeSearchBar,
  openSearchBar,
  toggleSearchBar,
} from "../../../../../store/action/search-bar";

import { TCombinedStates } from "../../../../../store";

export const useToggleSearchBar = () => {
  const dispatch = useDispatch();

  const isSearchBarClosed = useSelector(
    (state: TCombinedStates) => state.searchBar.isSearchBarClose,
    shallowEqual
  );

  const _toggleSearchBar = useCallback(() => dispatch(toggleSearchBar()), [
    dispatch,
  ]);

  const _openSearchBar = useCallback(() => dispatch(openSearchBar()), [
    dispatch,
  ]);

  const _closeSearchBar = useCallback(() => dispatch(closeSearchBar()), [
    dispatch,
  ]);

  return {
    isSearchBarClosed,
    _toggleSearchBar,
    _openSearchBar,
    _closeSearchBar,
  };
};
