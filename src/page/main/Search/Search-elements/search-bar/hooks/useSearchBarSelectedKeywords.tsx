import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";
import { TCombinedStates } from "../../../../../../store";

import { setSelectedKeyword } from "../../../../../../store/action/search";

export const useSearchBarSelectedKeywords = (
  dispatch: Dispatch<any>
): JSX.Element[] => {
  const selectedKeywords = useSelector(
    (state: TCombinedStates) => state.search.selectedKeywords
  );

  const removeKeyword = useCallback(
    (keyword: string) => dispatch(setSelectedKeyword(keyword)),
    []
  );

  const onClickSelectedKeyword = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) =>
      removeKeyword((e.target as HTMLElement)?.innerText),
    []
  );

  // click to remove

  return useMemo(
    () =>
      selectedKeywords?.map(keyword => (
        <li
          key={uuid()}
          className="searchBar--selected-keywords"
          onClick={onClickSelectedKeyword}
        >
          {keyword}
        </li>
      )),
    [selectedKeywords]
  );
};
