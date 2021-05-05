import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setImagePlacerRef } from "../../../store/action/carousel";
import CarouselImages from "./CarouselImages";

const CarouselImagePlacer: React.FC = () => {
  const dispatch = useDispatch();
  const _setImgRef = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => dispatch(setImagePlacerRef(ref)),
    []
  );

  const setImageRef = useCallback((ref: HTMLDivElement) => {
    if (ref) {
      _setImgRef({ current: ref });
    }
  }, []);

  return (
    <div className="carousel--imagePlacer" ref={setImageRef}>
      <CarouselImages />
    </div>
  );
};

export default CarouselImagePlacer;
