import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { TCombinedStates } from "../../../../typings/type";
import "./_ImagesIndicator.scss";

const ImagesIndicator: React.FC = () => {
  const totalImagesCount = useSelector(
    (state: TCombinedStates) => state.imgFetcher.imgURLs.length
  );
  const currentImagesPlacerIndex = useSelector(
    (state: TCombinedStates) =>
      state.carousel.curIdx,
    shallowEqual
  );

  const indicatorJSX: Array<JSX.Element> = [];
  for (let i = 0; i < totalImagesCount; ++i) {
    indicatorJSX.push(
      <div
        key={uuidv4()}
        className={currentImagesPlacerIndex === i ? "highlight" : ""}
      ></div>
    );
  }
  // console.log(indicatorJSX);
  return <div className="imagesIndicator">{indicatorJSX}</div>;
};

export default ImagesIndicator;
