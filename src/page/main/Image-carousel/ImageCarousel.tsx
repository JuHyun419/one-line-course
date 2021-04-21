import React, { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { MainCarouselImageFetchState } from "../../../typings/type";

import { initFetchImages, updateImagesPlacerRef } from "../../../store/action";

import ImageMoveTo from "./Image-carousel-elements/ImageMoveTo";
import ImagesIndicator from "./Image-carousel-elements/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC = () => {
  const {
    images,
    _initFetchImages,
    _updateImagesPlacerRef,
  } = useImageCarousel();

  const setImagesPlacerRef = (ref: HTMLDivElement) => {
    if (!ref) return;
    _updateImagesPlacerRef({ current: ref });
  };

  useEffect(() => {
    _initFetchImages("office");
  }, []);

  const imgJSX = useMemo(
    () =>
      images?.map(url => (
        <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
      )),
    [images]
  );

  return (
    <div className="imageCarousel">
      <div className="imageCarousel-imagePlacer" ref={setImagesPlacerRef}>
        {imgJSX}
      </div>
      <div className="imageCarousel-indicator">
        <ImageMoveTo />
        <ImagesIndicator />
      </div>
    </div>
  );
};

const useImageCarousel = () => {
  const dispatch = useDispatch();

  const images = useSelector(
    (state: MainCarouselImageFetchState) => state.images,
    shallowEqual
  );

  const _initFetchImages = useCallback(
    (query: string) => dispatch(initFetchImages({ query })),
    [dispatch]
  );

  const _updateImagesPlacerRef = useCallback(
    (imagesPlacerRef: React.RefObject<HTMLDivElement>) =>
      dispatch(updateImagesPlacerRef(imagesPlacerRef)),
    [dispatch]
  );

  return {
    images,
    _initFetchImages,
    _updateImagesPlacerRef,
  };
};

export default ImageCarousel;
