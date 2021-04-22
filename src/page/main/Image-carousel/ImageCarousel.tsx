import React, { useMemo, useCallback, Dispatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// import { TCombinedStates } from "../../../typings/type";
import { setRef } from "../../../store/action/carousel";
import { CombinedCarousel } from "../../../store";

import ImageMoveTo from "./Image-carousel-elements/ImageMoveTo";
import ImagesIndicator from "./Image-carousel-elements/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC = () => {
  const setImgRef = useImgRef();
  const imgJSX = useImg();

  return (
    <div className="imageCarousel">
      <div className="imageCarousel-imagePlacer" ref={setImgRef}>
        {imgJSX}
        {/* {images && images.map(url => (
          <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
        ))} */}
      </div>
      <div className="imageCarousel-indicator">
        <ImageMoveTo />
        <ImagesIndicator />
      </div>
    </div>
  );
};

const useImg = () => {
  const imgs = useSelector(
    (state: CombinedCarousel) => state.carouselAsync.urls
  );

  return useMemo(
    () =>
      imgs?.map(url => (
        <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
      )),
    [imgs]
  );
};

const useImgRef = () => {
  const dispatch = useDispatch();

  const imgRef = useSelector((state: CombinedCarousel) => state.carousel.ref);

  const _setImgRef = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => dispatch(setRef(ref)),
    [dispatch]
  );

  return useCallback(
    (ref: HTMLDivElement) => {
      if (ref && !imgRef?.current) {
        console.log("Image Placer Ref updated!");
        _setImgRef({ current: ref });
      }
    },
    [imgRef]
  );
};

export default ImageCarousel;
