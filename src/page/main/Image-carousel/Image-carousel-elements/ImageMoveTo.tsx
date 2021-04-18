import React, { useState } from "react";
import { useMoveTo } from "./useMoveTo";

import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC<{
  imagePlacerEl: React.RefObject<HTMLDivElement>;
  imageCount: number;
  curIdx: number;
  setCurIdx: React.Dispatch<React.SetStateAction<number>>;
}> = ({ imagePlacerEl, imageCount, curIdx, setCurIdx }) => {
  const { onMoveToLeft, onMoveToRight } = useMoveTo(
    imagePlacerEl,
    imageCount,
    curIdx,
    setCurIdx
  );

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

export default ImageMoveTo;
