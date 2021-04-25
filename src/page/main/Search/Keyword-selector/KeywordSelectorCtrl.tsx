import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  setSelectedKeyword,
  setSelectedPlatform,
} from "../../../../store/action/search";

import {
  platformsEnglishAsArr,
  keywordsKoreanAsArr,
  keywordsEnglishAsArr,
} from "../search-bar/SearchData";

import KeywordSelector from "./KeywordSelector";

import "./_KeywordSelectorCtrl.scss";

const KeywordSelectorCtrl = () => {
  const dispatch = useDispatch();

  const _setSelectedKeyword = useCallback(
    (selectedKeyword: string) => dispatch(setSelectedKeyword(selectedKeyword)),
    []
  );

  const _setSelectedPlatform = useCallback(
    (selectedPlatform: string) =>
      dispatch(setSelectedPlatform(selectedPlatform)),
    []
  );

  return (
    <div className="keywordSelectorCtrl">
      <KeywordSelector
        title="플랫폼"
        keywords={platformsEnglishAsArr}
        keywordsClassName="platforms"
        dispatchKeyword={_setSelectedPlatform}
      />
      <KeywordSelector
        title="프로그래밍 언어 / API / 프레임워크"
        keywords={[
          ...keywordsKoreanAsArr.slice(keywordsKoreanAsArr.length / 2),
          ...keywordsEnglishAsArr.slice(0, keywordsEnglishAsArr.length / 2),
        ]}
        keywordsClassName="keywords"
        dispatchKeyword={_setSelectedKeyword}
      />
    </div>
  );
};

export default KeywordSelectorCtrl;
