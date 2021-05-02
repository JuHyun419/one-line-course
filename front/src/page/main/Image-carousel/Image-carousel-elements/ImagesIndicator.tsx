import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { TCombinedStates } from "~/src/store";

import "./_ImagesIndicator.scss";

const ImagesIndicator: React.FC = () => {
  const imgLen = useSelector(
    (state: TCombinedStates) => state.carouselAsync.urls?.length,
    shallowEqual
  );

  const curIdx = useSelector(
    (state: TCombinedStates) => state.carousel.idx,
    shallowEqual
  );

  const indicatorJSX: Array<JSX.Element> = useMemo(
    () =>
      new Array(imgLen)
        .fill(0)
        .map((_, i) => (
          <div key={uuidv4()} className={curIdx === i ? "highlight" : ""}></div>
        )),
    [imgLen, curIdx]
  );

  return <div className="imagesIndicator">{indicatorJSX}</div>;
};

export default ImagesIndicator;
