import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../../../store";

import { clearSuggestion } from "../../../../../store/action/search-suggestion";
import { setSelectedKeyword } from "../../../../../store/action/search";
import { setCurrentInput } from "../../../../../store/action/search-bar";

import { useSearchBarSuggestion } from "./";

const SearchBarInput = () => {
  const { onSearchBarInputChange } = useSearchBarSuggestion();

  const input = useSelector(
    (state: TCombinedStates) => state.searchBar.input,
    shallowEqual
  );

  const dispatch = useDispatch();

  const _setSelectedKeyword = useCallback(
    (keyword: string) => dispatch(setSelectedKeyword(keyword)),
    [dispatch]
  );
  const clearCurrentInput = useCallback(
    (input: string) => dispatch(setCurrentInput(input)),
    [dispatch]
  );
  const _clearSuggestion = useCallback(() => dispatch(clearSuggestion()), [
    dispatch,
  ]);

  const onSubmitInput = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        // TODO: check the keyword is valid
        console.log(input);
        _setSelectedKeyword(input);
        clearCurrentInput("");
        _clearSuggestion();
      }
    },
    [input, _setSelectedKeyword, clearCurrentInput, _clearSuggestion]
  );

  return (
    <input
      type="text"
      className="searchBar--input"
      placeholder="키워드를 입력해서 강의를 찾으세요"
      onChange={onSearchBarInputChange}
      onKeyPress={onSubmitInput}
      value={input}
    />
  );
};

export default SearchBarInput;
