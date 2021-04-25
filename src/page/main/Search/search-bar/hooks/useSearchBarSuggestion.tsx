import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "../../../../../store";
import { useSuggestion } from "./useSuggestion";

export const useSearchBarSuggestion = () => {
  const onSearchBarInputChange = useSuggestion();

  const suggestions = useSelector(
    (state: TCombinedStates) => state.searchSuggestion.suggestions
  );
  const suggestionJSX = useMemo(
    () =>
      suggestions && suggestions.length > 0
        ? suggestions?.map((suggestion: string) => (
            <li key={uuid()}>{suggestion}</li>
          ))
        : null,
    [suggestions]
  );

  return {
    onSearchBarInputChange,
    suggestionJSX,
  };
};
