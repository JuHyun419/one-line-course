import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { CombinedCarousel } from "../../../../store";
// import { TCombinedStates } from "../../../../typings/type";
import "./_ImagesIndicator.scss";

const ImagesIndicator: React.FC = () => {
  const imgLen = useSelector(
    (state: CombinedCarousel) => state.carouselAsync.urls?.length,
    shallowEqual
  );

  const curIdx = useSelector(
    (state: CombinedCarousel) => state.carousel.idx,
    shallowEqual
  );

  let indicatorJSX: Array<JSX.Element> = [];
  if (imgLen !== undefined) {
    for (let i = 0; i < imgLen; ++i) {
      indicatorJSX.push(
        <div key={uuidv4()} className={curIdx === i ? "highlight" : ""}></div>
      );
    }
  }

  // console.log(indicatorJSX);
  return <div className="imagesIndicator">{indicatorJSX}</div>;
};

export default ImagesIndicator;
