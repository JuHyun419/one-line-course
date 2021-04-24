import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "../../../../../store";
import { useSuggestion } from "./useSuggestion";

export const useSearchBarSuggestion = () => {
  const onSearchBarInputChange = useSuggestion();

  const suggestions = useSelector(
    (state: TCombinedStates) => state.search.suggestions
  );
  const suggestionJSX = useMemo(
    () => suggestions?.map(sug => <li key={uuid()}>{sug}</li>),
    [suggestions]
  );

  return {
    onSearchBarInputChange,
    suggestionJSX,
  };
};
