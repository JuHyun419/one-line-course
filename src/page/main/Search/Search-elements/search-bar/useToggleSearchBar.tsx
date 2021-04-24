import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { toggleSearchBar } from "../../../../../store/action/search";

import { TCombinedStates } from "../../../../../store";

export const useToggleSearchBar = () => {
  const dispatch = useDispatch();

  const isSearchBarClosed = useSelector(
    (state: TCombinedStates) => state.search.isSearchBarClose,
    shallowEqual
  );

  const _toggleSearchBar = useCallback(() => dispatch(toggleSearchBar()), [
    dispatch,
  ]);

  return { isSearchBarClosed, _toggleSearchBar };
};
