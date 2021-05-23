import React from "react";
import useCarouselRotator from "./useCarouselRotator";

import "./_CarouselRotator.scss";

const CarouselRotator: React.FC = () => {
  const onRotateToLeft = useCarouselRotator("left");
  const onRotateToRight = useCarouselRotator("right");

  return (
    <div className="carousel--rotator">
      <div onClick={onRotateToLeft}>&larr;</div>
      <div onClick={onRotateToRight}>&rarr;</div>
    </div>
  );
};

export default CarouselRotator;
