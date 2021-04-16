import React, { useCallback } from "react";

import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC<{ images: Array<string> | undefined }> = ({
  images,
}) => {
  const onMoveToLeft = useCallback(
    (e: React.SyntheticEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    [images]
  );

  const onMoveToRight = useCallback(
    (e: React.SyntheticEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    [images]
  );

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&#60;</div>
      <div onClick={onMoveToRight}>&#62;</div>
    </div>
  );
};

export default ImageMoveTo;
