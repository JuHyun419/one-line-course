import React from "react";

import CarouselRotator from "./carousel-rotator/CarouselRotator";
import CarouselIndicator from "./carousel-indicator/CarouselIndicator";

import CarouselImagePlacer from "./CarouselImagePlacer";

import "./_Carousel.scss";

const Carousel: React.FC = () => (
  <div className="carousel">
    <CarouselImagePlacer />
    <div className="carousel--indicator">
      <CarouselRotator />
      <CarouselIndicator />
    </div>
  </div>
);

export default Carousel;
