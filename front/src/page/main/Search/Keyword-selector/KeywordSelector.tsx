import React, { useCallback, useMemo } from "react";
import { v4 as uuid } from "uuid";
import { useToggleSearchBar } from "../search-bar";

import "./_KeywordSelector.scss";

const KeywordSelector: React.FC<{
  title: string;
  keywords: Array<string>;
  keywordsClassName: string;
  dispatchKeyword: (selectedPlatform: string) => void;
}> = ({ title, keywords, keywordsClassName, dispatchKeyword }) => {
  const { _openSearchBar } = useToggleSearchBar();

  const onSelectKeyword = useCallback(
    (e: React.MouseEvent<HTMLParagraphElement>) => {
      e.stopPropagation();
      // current element is p tag
      const el = e.target as HTMLParagraphElement;

      dispatchKeyword(el?.innerText);
      // toggle background color of parent element (li tag)
      (el?.parentElement as HTMLLIElement).classList.toggle("active");
      _openSearchBar();
    },
    []
  );

  const onSelectKeywordLiElement = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      const el = e.target as HTMLLIElement;

      // // apply backgroud color
      el?.classList.toggle("active");

      // dispatch to the store with the selected keyword or platform
      dispatchKeyword(
        (el?.firstElementChild as HTMLParagraphElement).innerText
      );
      _openSearchBar();
    },
    []
  );

  // const selectedKeywords = useSelector(
  //   (state: TCombinedStates) => state.search.selectedKeywords
  // );

  // const selectedPlatforms = useSelector(
  //   (state: TCombinedStates) => state.search.selectedPlatforms
  // );

  // useEffect(() => {
  //   // 1. compare selected keywords with
  // }, [selectedKeywords]);

  // useEffect(() => {

  // }, [selectedPlatforms]);

  const selectedKeywordsJSX = useMemo(
    () =>
      keywords?.map((keyword: string) => (
        <li
          key={uuid()}
          onClick={onSelectKeywordLiElement}
          className={keywordsClassName}
        >
          <p onClick={onSelectKeyword}>{keyword}</p>
        </li>
      )),
    [keywords]
  );

  return (
    <div className="keywordSelector">
      <div className="keywordSelector-left">
        <p>{title}</p>
      </div>
      <div className="keywordSelector-right">
        <ul>{selectedKeywordsJSX}</ul>
      </div>
    </div>
  );
};

export default KeywordSelector;
