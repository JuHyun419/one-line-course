import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { TCombinedStates } from "../../../../../../store";

import { EButtonSize, EButtonType } from "../../../../../../typings/type";
import Button from "../../../../../../component/button/Button";

import { setSelectedKeyword } from "../../../../../../store/action/search";
import {
  setCurrentInput,
  ToggleInvalidKeywordWarningRef,
} from "../../../../../../store/action/search-bar";
import { clearSuggestion } from "../../../../../../store/action/search-suggestion";

import "./_SearchBarButton.scss";

const AddButton: React.FC = () => {
  const input = useSelector(
    (state: TCombinedStates) => state.searchBar.input,
    shallowEqual
  );

  const suggestions = useSelector(
    (state: TCombinedStates) => state.searchSuggestion.suggestions
  );

  // 1. Add input to Selected Keyword
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

  const onClickAddButton = useCallback(
    (_: React.MouseEvent<HTMLDivElement>) => {
      // TODO: check the keyword is valid
      console.log(input);
      if (!suggestions.includes(input)) {
        _toggleInvalidKeywordWarning();
        setTimeout(() => _toggleInvalidKeywordWarning(), 3000);
        return;
      }

      // add input to selected keywords
      _setSelectedKeyword(input);
      // wipe out the current input & suggestion
      clearCurrentInput("");
      _clearSuggestion();
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
    <Button
      btnSize={EButtonSize.Small}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--btn-add"
      onClick={onClickAddButton}
    >
      추가
    </Button>
  );
};

export default AddButton;
