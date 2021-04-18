import React, { useState } from "react";
import { useMoveTo } from "./useMoveTo";

import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC<{
  imagePlacerEl: React.RefObject<HTMLDivElement>;
  imageCount: number;
}> = ({ imagePlacerEl, imageCount }) => {
  const { onMoveToLeft, onMoveToRight } = useMoveTo(imagePlacerEl, imageCount);

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

export default ImageMoveTo;
