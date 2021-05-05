import React, { useCallback, useMemo, Fragment } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import { setImgWidth } from "~/src/store/action/carousel";

const CarouselImages: React.FC = () => {
  const dispatch = useDispatch();
  const carouselImageUrls = useSelector(
    (state: TCombinedStates) => state.carouselAsync.urls
  );

  const _setImgWidth = useCallback(
    (imgWidth: number) => dispatch(setImgWidth(imgWidth)),
    []
  );

  // const carouselImageWidthRef = useRef<HTMLImageElement>(null);

  const curIdx = useSelector((state: TCombinedStates) => state.carousel.idx);

  const setImageWidthRef = useCallback((el: HTMLImageElement) => {
    if (el) {
      setTimeout(() => _setImgWidth(el.clientWidth), 500);
    }
  }, []);

  const carouselImagesJSX: JSX.Element[] | undefined = useMemo(
    () =>
      carouselImageUrls?.map((url: string, i: number) =>
        i === 0 ? (
          <img
            key={uuid()}
            src={url}
            className={[
              "carousel--image",
              `${curIdx !== i ? "hidden" : ""}`,
            ].join(" ")}
            alt="carousel image"
            ref={setImageWidthRef}
          />
        ) : (
          <img
            key={uuid()}
            src={url}
            className={[
              "carousel--image",
              `${curIdx !== i ? "hidden" : ""}`,
            ].join(" ")}
            alt="carousel image"
          />
        )
      ),
    [carouselImageUrls, curIdx]
  );

  return <Fragment>{carouselImagesJSX}</Fragment>;
};

export default CarouselImages;
