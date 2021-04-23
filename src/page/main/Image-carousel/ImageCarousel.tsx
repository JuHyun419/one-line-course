import React, {
  useMemo,
  useCallback,
  Dispatch,
  useRef,
  useEffect,
} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setImgWidth, setImagePlacerRef } from "../../../store/action/carousel";
import { TCombinedStates } from "../../../store";

import ImageMoveTo from "./Image-carousel-elements/ImageMoveTo";
import ImagesIndicator from "./Image-carousel-elements/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC = () => {
  const dispatch = useDispatch();

  const setImgRef = useImgRef(dispatch);
  const imgJSX = useImg(dispatch);

  return (
    <div className="imageCarousel">
      <div className="imageCarousel-imagePlacer" ref={setImgRef}>
        {imgJSX}
      </div>
      <div className="imageCarousel-indicator">
        <ImageMoveTo />
        <ImagesIndicator />
      </div>
    </div>
  );
};

const useImg = (dispatch: Dispatch<any>) => {
  const imgs = useSelector(
    (state: TCombinedStates) => state.carouselAsync.urls
  );

  const _setImgWidth = useCallback(
    (imgWidth: number) => dispatch(setImgWidth(imgWidth)),
    [dispatch]
  );

  const imgTmpRef = useRef<HTMLImageElement>(null);

  const curIdx = useSelector(
    (state: TCombinedStates) => state.carousel.idx,
    shallowEqual
  );

  useEffect(() => {
    if (!imgTmpRef.current) return;

    const timerHandle = setTimeout(() => {
      _setImgWidth(imgTmpRef.current?.clientWidth!);
    }, 500);

    return () => clearTimeout(timerHandle);
  }, [imgs, imgTmpRef]);

  return useMemo(
    () =>
      imgs?.map((url: string, i: number) => {
        // to calc the width of image
        if (i === 0) {
          return (
            <img
              key={uuidv4()}
              src={url}
              className={[
                "imageCarousel--image",
                `${curIdx !== i ? "hidden" : ""}`,
              ].join(" ")}
              ref={imgTmpRef}
            />
          );
        } else {
          return (
            <img
              key={uuidv4()}
              src={url}
              className={[
                "imageCarousel--image",
                `${curIdx !== i ? "hidden" : ""}`,
              ].join(" ")}
            />
          );
        }
      }),
    [imgs, curIdx]
  );
};

const useImgRef = (dispatch: Dispatch<any>) => {
  const imgRef = useSelector((state: TCombinedStates) => state.carousel.ref);

  const _setImgRef = useCallback(
    (ref: React.RefObject<HTMLDivElement>) => dispatch(setImagePlacerRef(ref)),
    [dispatch]
  );

  return useCallback(
    (ref: HTMLDivElement) => {
      if (ref && !imgRef?.current) {
        _setImgRef({ current: ref });
      }
    },
    [imgRef]
  );
};

export default ImageCarousel;
