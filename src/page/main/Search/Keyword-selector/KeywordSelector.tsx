import React, { useCallback } from "react";
import { v4 as uuid } from "uuid";

import "./_KeywordSelector.scss";

const KeywordSelector: React.FC<{
  title: string;
  keywords: Array<string>;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}> = ({ title, keywords, onClick }) => {
  const onPropagateFromP = useCallback((e: React.MouseEvent<HTMLElement>) => {
    console.log("li!", e.target);

    (e.target as HTMLElement).classList.toggle("active");
  }, []);

  return (
    <div className="keywordSelector">
      <div className="keywordSelector-left">
        <p>{title}</p>
      </div>
      <div className="keywordSelector-right">
        <ul>
          {keywords.map(keyword => (
            <li key={uuid()} onClick={onPropagateFromP}>
              <p onClick={onClick}>{keyword}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordSelector;
