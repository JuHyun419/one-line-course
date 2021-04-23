import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  setSelectedKeyword,
  setSelectedPlatform,
} from "../../../../store/action/search";

import {
  platformsAsArr,
  keywordsKoreanAsArr,
  keywordsEnglishAsArr,
} from "../Search-elements/search-bar/SearchData";

import KeywordSelector from "./KeywordSelector";

import "./_KeywordSelectorCtrl.scss";

const KeywordSelectorCtrl = () => {
  const dispatch = useDispatch();

  const _setSelectedKeyword = useCallback(
    (selectedKeyword: string) => dispatch(setSelectedKeyword(selectedKeyword)),
    [dispatch]
  );

  const _setSelectedPlatform = useCallback(
    (selectedPlatform: string) =>
      dispatch(setSelectedPlatform(selectedPlatform)),
    [dispatch]
  );

  const onSelectKeyword = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      console.log("p!", e.target);

      const el = e.target as HTMLElement;
      _setSelectedKeyword(el.innerText);
    },
    [_setSelectedKeyword]
  );

  const onSelectPlatform = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      console.log("p!", e.target);

      const el = e.target as HTMLElement;
      _setSelectedPlatform(el.innerText);
    },
    [_setSelectedPlatform]
  );

  return (
    <div className="keywordSelectorCtrl">
      <KeywordSelector
        title="플랫폼"
        keywords={platformsAsArr}
        onClick={onSelectPlatform}
      />
      <KeywordSelector
        title="프로그래밍 언어 / API / 프레임워크"
        keywords={[
          ...keywordsKoreanAsArr.slice(keywordsKoreanAsArr.length / 2),
          ...keywordsEnglishAsArr.slice(0, keywordsEnglishAsArr.length / 2),
        ]}
        onClick={onSelectKeyword}
      />
    </div>
  );
};

export default KeywordSelectorCtrl;
