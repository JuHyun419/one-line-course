import { useCallback, useMemo, useRef } from "react";

import {
  AllKeywordsData_English,
  AllKeywordsData_Korean,
} from "../../Search-keyword/SearchKeywordData";

const koreanCheckReg = /[가-힣]/;
// const englishCheckReg = /[a-zA-Z]/;
// const othersCheckReg = /[^ㄱ-ㅎ가-힣a-zA-Z ]/;

export const useSuggestion = () => {
  const nextInputAwaitTimer = useRef<NodeJS.Timeout>();

  const allKeywords_English = useMemo(() => AllKeywordsData_English, [
    AllKeywordsData_English,
  ]);

  const allKeywords_Korean = useMemo(() => AllKeywordsData_Korean, [
    AllKeywordsData_Korean,
  ]);

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
          suggest(Array.from(allKeywords_English), value);
        } else {
          suggest(Array.from(allKeywords_Korean), value);
        }
      }, 1000);
    },
    [allKeywords_English, allKeywords_Korean]
  );
};

const suggest = (keywords: string[], input: string) => {
  // no empty input allowed
  if (input === "") {
    return;
  }

  console.log("input : ", input);

  const matchedKeywords: Array<string> = keywords.filter(
    (skillKeyword: string) => skillKeyword.includes(input)
  );

  console.log(
    `keywords query count : ${keywords.length}`,
    `\nmatched keywords : ${matchedKeywords}`
  );
};
