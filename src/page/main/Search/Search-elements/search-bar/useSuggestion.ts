import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setSuggestion,
  ISetSuggestion,
} from "../../../../../store/action/search";

import { keywordsEnglishAsArr, keywordsKoreanAsArr } from "./SearchData";

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
  const _setSuggestion = useCallback(
    (suggestion: string[]) => dispatch(setSuggestion(suggestion)),
    [dispatch]
  );

  return useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // dispose the time if it already exists
      if (nextInputAwaitTimer.current) {
        clearTimeout(nextInputAwaitTimer.current);
      }

      nextInputAwaitTimer.current = setTimeout(() => {
        const { value } = e.target;
        // match regex with input and decide whether using Korean or English
        // and suggest
        suggest(
          isKorean(value) ? keywordsKoreanAsArr : keywordsEnglishAsArr,
          value,
          _setSuggestion
        );
      }, 1000);
    },
    [keywordsEnglishAsArr, keywordsKoreanAsArr, _setSuggestion]
  );
};

const suggest = (
  keywords: string[],
  input: string,
  _setSuggestion: (suggestion: string[]) => ISetSuggestion
) => {
  // no empty input allowed
  if (input === "") {
    return;
  }
  // filter the keywords including input
  const matchedKeywords: string[] = keywords.filter((keywords: string) =>
    keywords.includes(input)
  );
  // disapatch action to the store
  _setSuggestion(matchedKeywords);

  // console.log(
  //   `keywords query count : ${keywords.length}`,
  //   `\nmatched keywords : ${matchedKeywords}`
  // );
};
