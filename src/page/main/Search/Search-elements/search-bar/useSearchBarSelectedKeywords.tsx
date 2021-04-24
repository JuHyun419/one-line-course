import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "../../../../../store";

export const useSearchBarSelectedKeywords = (): JSX.Element[] => {
  const selectedKeywords = useSelector(
    (state: TCombinedStates) => state.search.selectedKeywords
  );

  return useMemo(
    () => selectedKeywords?.map(keyword => <li key={uuid()}>{keyword}</li>),
    [selectedKeywords]
  );
};
