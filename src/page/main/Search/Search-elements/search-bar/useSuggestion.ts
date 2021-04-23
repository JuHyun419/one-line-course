import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setSuggestion,
  ISetSuggestion,
} from "../../../../../store/action/search";

import { keywordsEnglishAsArr, keywordsKoreanAsArr } from "./SearchData";

const koreanCheckReg = /[가-힣]/;
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
      // start detecting whether the input finished or not,

      if (nextInputAwaitTimer.current) {
        clearTimeout(nextInputAwaitTimer.current);
      }

      nextInputAwaitTimer.current = setTimeout(() => {
        const { value } = e.target;
        // Set back to true, if no detection of input.
        const matchRes = value.match(koreanCheckReg);
        // console.log(matchRes);

        if (matchRes === null) {
          suggest(keywordsEnglishAsArr, value, _setSuggestion);
        } else {
          suggest(keywordsKoreanAsArr, value, _setSuggestion);
        }
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

  console.log("input : ", input);

  const matchedKeywords: Array<string> = keywords.filter(
    (skillKeyword: string) => skillKeyword.includes(input)
  );

  _setSuggestion(matchedKeywords);

  console.log(
    `keywords query count : ${keywords.length}`,
    `\nmatched keywords : ${matchedKeywords}`
  );
};
