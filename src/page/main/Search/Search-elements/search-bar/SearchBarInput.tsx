import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../../../store";

import { clearSuggestion } from "../../../../../store/action/search-suggestion";
import { setSelectedKeyword } from "../../../../../store/action/search";
import {
  setCurrentInput,
  ToggleInvalidKeywordWarningRef,
} from "../../../../../store/action/search-bar";

import { useSearchBarSuggestion } from "./";

const SearchBarInput = () => {
  const { onSearchBarInputChange } = useSearchBarSuggestion();

  const input = useSelector(
    (state: TCombinedStates) => state.searchBar.input,
    shallowEqual
  );

  const suggestions = useSelector(
    (state: TCombinedStates) => state.searchSuggestion.suggestions
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
  const _toggleInvalidKeywordWarning = useCallback(
    () => dispatch(ToggleInvalidKeywordWarningRef()),
    [dispatch]
  );

  const onSubmitInput = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        if (!suggestions.includes(input)) {
          _toggleInvalidKeywordWarning();
          setTimeout(() => _toggleInvalidKeywordWarning(), 3000);
        } else {
          // add input to selected keywords
          _setSelectedKeyword(input);
        }

        // wipe out the current input & suggestion
        clearCurrentInput("");
        _clearSuggestion();
      }
    },
    [
      input,
      suggestions,
      _setSelectedKeyword,
      clearCurrentInput,
      _clearSuggestion,
      _toggleInvalidKeywordWarning,
    ]
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
