import React from "react";

import { SearchKeywords } from "../Search-keyword";

import "./_KeywordSelector.scss";

const KeywordSelector: React.FC<{
  title: string;
  keywords: Array<string>;
}> = ({ title }) => {
  return (
    <div className="keywordSelector">
      <div className="keywordSelector-left">
        <p>{title}</p>
      </div>
      <div className="keywordSelector-right">
        <SearchKeywords />
      </div>
    </div>
  );
};

export default KeywordSelector;
