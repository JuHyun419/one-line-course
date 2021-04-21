import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  MainCarouselImageFetchState,
  MainCarouselImageState,
} from "../../../../typings/type";
import "./_ImagesIndicator.scss";

const ImagesIndicator: React.FC = () => {
  const imagesCount = useSelector(
    (state: MainCarouselImageFetchState) => state.imagesCount,
    shallowEqual
  );
  const currentImagesPlacerIndex = useSelector(
    (state: MainCarouselImageState) => state.currentImagesPlacerIndex,
    shallowEqual
  );

  const indicatorJSX: Array<JSX.Element> = [];
  for (let i = 0; i < imagesCount; ++i) {
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
