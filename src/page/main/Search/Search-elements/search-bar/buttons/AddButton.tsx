import React, { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { TCombinedStates } from "../../../../../../store";

import { EButtonSize, EButtonType } from "../../../../../../typings/type";
import Button from "../../../../../../component/button/Button";

import { setSelectedKeyword } from "../../../../../../store/action/search";
import { setCurrentInput } from "../../../../../../store/action/search-bar";
import { clearSuggestion } from "../../../../../../store/action/search-suggestion";

import "./_SearchBarButton.scss";

const AddButton: React.FC = () => {
  const input = useSelector(
    (state: TCombinedStates) => state.searchBar.input,
    shallowEqual
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

  const onClickAddButton = useCallback(
    (_: React.MouseEvent<HTMLDivElement>) => {
      // TODO: check the keyword is valid
      console.log(input);
      _setSelectedKeyword(input);
      clearCurrentInput("");
      _clearSuggestion();
    },
    [input, _setSelectedKeyword, clearCurrentInput, _clearSuggestion]
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
