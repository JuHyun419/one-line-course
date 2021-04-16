import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./_ImagesIndicator.scss";

const ImagesIndicator: React.FC<{
  imageCount: number;
  highlightIdx?: number;
}> = ({ imageCount, highlightIdx }) => {
  const indicatorJSX: Array<JSX.Element> = [];

  for (let i = 0; i < imageCount; ++i) {
    indicatorJSX.push(
      <div
        key={uuidv4()}
        className={highlightIdx === i ? "highlight" : ""}
      ></div>
    );
  }
  // console.log(indicatorJSX);
  return <div className="imagesIndicator">{indicatorJSX}</div>;
};

export default ImagesIndicator;
