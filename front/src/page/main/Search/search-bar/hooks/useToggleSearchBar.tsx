import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  closeSearchBar,
  openSearchBar,
  toggleSearchBar,
} from "../../../../../store/action/search-bar";

import { TCombinedStates } from "../../../../../store";

export const useToggleSearchBar = () => {
  const isSearchBarClosed = useSelector(
    (state: TCombinedStates) => state.searchBar.isSearchBarClose,
    shallowEqual
  );

  const dispatch = useDispatch();
  const _toggleSearchBar = useCallback(() => dispatch(toggleSearchBar()), []);
  const _openSearchBar = useCallback(() => dispatch(openSearchBar()), []);
  const _closeSearchBar = useCallback(() => dispatch(closeSearchBar()), []);

  return {
    isSearchBarClosed,
    _toggleSearchBar,
    _openSearchBar,
    _closeSearchBar,
  };
};
