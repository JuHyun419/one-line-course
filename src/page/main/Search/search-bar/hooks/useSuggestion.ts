import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "../../../../../store";
import { setCurrentInput } from "../../../../../store/action/search-bar";
import {
  setSuggestion,
  ISetSuggestion,
} from "../../../../../store/action/search-suggestion";

import { keywordsEnglishAsArr, keywordsKoreanAsArr } from "../SearchData";

const koreanCheckReg = /[가-힣]/;
/**
 * return true if input is Korean, nor false because it's English
 */
const isKorean = (input: string) => input.match(koreanCheckReg) !== null;

// const englishCheckReg = /[a-zA-Z]/;
// const othersCheckReg = /[^ㄱ-ㅎ가-힣a-zA-Z ]/;

export const useSuggestion = () => {
  const nextInputAwaitTimer = useRef<NodeJS.Timeout>();
  const dispatch = useDispatch();

  const suggestions = useSelector(
    (state: TCombinedStates) => state.searchSuggestion.suggestions
  );
  const _setSuggestionResult = useCallback(
    (suggestion: string[]) => dispatch(setSuggestion(suggestion)),
    []
  );
  const _setInput = useCallback(
    (input: string) => dispatch(setCurrentInput(input)),
    []
  );

  return useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      _setInput(e.target.value);

      // dispose the time if it already exists
      if (nextInputAwaitTimer.current) {
        clearTimeout(nextInputAwaitTimer.current);
      }

      nextInputAwaitTimer.current = setTimeout(() => {
        const { value } = e.target;
        // match regex with input and decide whether using Korean or English and suggest

        suggest(
          isKorean(value) ? keywordsKoreanAsArr : keywordsEnglishAsArr,
          value,
          suggestions,
          _setSuggestionResult
        );

        return () => {
          if (nextInputAwaitTimer.current) {
            clearTimeout(nextInputAwaitTimer.current);
          }
        };
      }, 300);
    },
    [keywordsEnglishAsArr, keywordsKoreanAsArr]
  );
};

const suggest = (
  keywords: string[],
  input: string,
  suggestions: string[],
  _setSuggestionResult: (suggestion: string[]) => ISetSuggestion
) => {
  // no empty input allowed
  if (input === "") {
    // wipe out the previous suggestions if any remains
    // if (suggestions && suggestions.length > 0) {
    // }
    _setSuggestionResult([]);

    return;
  }

  // filter the keywords including input
  const matchedKeywords: string[] = keywords.filter((keywords: string) =>
    keywords.includes(input)
  );

  // disapatch action to the store
  _setSuggestionResult(matchedKeywords);
};
