import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// import { TCombinedStates } from "../../../typings/type";
import { setRef } from "../../../store/action/carousel";
import { CombinedCarousel } from "../../../store";

import ImageMoveTo from "./Image-carousel-elements/ImageMoveTo";
import ImagesIndicator from "./Image-carousel-elements/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC = () => {
  const dispatch = useDispatch();

  const imgs = useSelector((state: CombinedCarousel) => state.carouselAsync.urls);

  const _setImgRef = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => dispatch(setRef(ref)),
    [dispatch]
  );

  const imgRef = useSelector((state: CombinedCarousel) => state.carousel.ref);

  const setImgRef = useCallback(
    (ref: HTMLDivElement) => {
      if (ref && !imgRef?.current) {
        console.log("Image Placer Ref updated!");
        _setImgRef({ current: ref });
      }
    },
    [imgRef]
  );

  const imgJSX = useMemo(
    () =>
      imgs?.map(url => (
        <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
      )),
    [imgs]
  );

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

// const useImageCarousel = () => {
//   const dispatch = useDispatch();

//   const images = useSelector(
//     (state: TCombinedStates) => state.mainCarouselImagesFetch.images
//   );

//   const _initFetchImages = useCallback(
//     (query: string) => dispatch(initFetchImages({ query })),
//     [dispatch]
//   );

//   const _updateImagesPlacerRef = useCallback(
//     (imagesPlacerRef: React.RefObject<HTMLDivElement>) =>
//       dispatch(updateImagesPlacerRef(imagesPlacerRef)),
//     [dispatch]
//   );

//   return {
//     images,
//     _initFetchImages,
//     _updateImagesPlacerRef,
//   };
// };

export default ImageCarousel;
