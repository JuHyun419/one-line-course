import React, { useMemo } from "react";
import { SearchKeywordData } from "../Search-keyword";

import KeywordSelector from "./KeywordSelector";
import "./_KeywordSelectorCtrl.scss";

const KeywordSelectorCtrl = () => {
  const allKeywords = useMemo(() => SearchKeywordData, []);

  return (
    <div className="keywordSelectorCtrl">
      <KeywordSelector title="플랫폼" keywords={["유튜브", "인프런"]} />
      <KeywordSelector
        title="프로그래밍 언어"
        keywords={["c", "c++", "c#", "java", "javascript", "python"]}
      />
      <KeywordSelector title="API / 프레임워크" keywords={["jsp", "jpa"]} />
    </div>
  );
};

export default KeywordSelectorCtrl;
