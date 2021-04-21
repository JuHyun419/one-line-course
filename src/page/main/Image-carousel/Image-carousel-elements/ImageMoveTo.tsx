import React from "react";
import { useMoveTo } from "./useMoveTo";
import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC = () => {
  const { onMoveToLeft, onMoveToRight } = useMoveTo();

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

export default ImageMoveTo;
