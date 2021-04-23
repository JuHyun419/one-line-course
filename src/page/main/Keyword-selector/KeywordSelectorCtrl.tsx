import React, { useMemo } from "react";
import { SearchKeywordData } from "../Search-keyword";
import { AllPlatformsData } from "../Search-keyword/SearchKeywordData";

import KeywordSelector from "./KeywordSelector";
import "./_KeywordSelectorCtrl.scss";

const KeywordSelectorCtrl = () => {
  const allPlatforms = useMemo(() => AllPlatformsData, []);
  const allKeywords = useMemo(() => SearchKeywordData, []);

  return (
    <div className="keywordSelectorCtrl">
      <KeywordSelector
        title="플랫폼"
        keywords={Array.from(AllPlatformsData)}
      />
      <KeywordSelector
        title="프로그래밍 언어 / API / 프레임워크"
        keywords={Array.from(allKeywords)}
      />
      {/* <KeywordSelector title="" keywords={["jsp", "jpa"]} /> */}
    </div>
  );
};

export default KeywordSelectorCtrl;