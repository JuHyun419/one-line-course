import React from "react";
import { v4 as uuid } from "uuid";

import "./_KeywordSelector.scss";

const KeywordSelector: React.FC<{
  title: string;
  keywords: Array<string>;
}> = ({ title, keywords }) => {
  return (
    <div className="keywordSelector">
      <div className="keywordSelector-left">
        <p>{title}</p>
      </div>
      <div className="keywordSelector-right">
        <ul>
          {keywords.map(keyword => (
            <li key={uuid()}>
              <p>{keyword}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordSelector;
