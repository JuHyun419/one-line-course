import React, {
  useState,
  useCallback,
  Dispatch,
  useEffect,
  useRef,
} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  ISetImageIndicatorCurIdxAction,
  setImageIndicatorCurIdx,
} from "../../../../store/action/carousel";
import { TCombinedStates } from "../../../../store";
import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC = () => {
  const dispatch = useDispatch();

  const onMoveToLeft = useMoveCarousel("left", dispatch);
  const onMoveToRight = useMoveCarousel("right", dispatch);

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

const useMoveCarousel = (
  direction: "left" | "right",
  dispatch: Dispatch<any>
) => {
  const placerEl = useSelector((state: TCombinedStates) => state.carousel.ref);

  const imgLen = useSelector(
    (state: TCombinedStates) => state.carouselAsync.urls?.length,
    shallowEqual
  );

  const curIdx = useSelector(
    (state: TCombinedStates) => state.carousel.idx,
    shallowEqual
  );

  const _setImageIndicatorCurIdx = useCallback(
    (idx: number) => dispatch(setImageIndicatorCurIdx(idx)),
    [dispatch]
  );

  const imgWidth = useSelector(
    (state: TCombinedStates) => state.carousel.imgWidth,
    shallowEqual
  );

  return useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (
        !placerEl?.current ||
        imgLen === undefined ||
        imgWidth === undefined
      ) {
        return;
      }

      if (direction === "left") {
        if (curIdx === 0) {
          _setImageIndicatorCurIdx(imgLen - 1);
          placerEl.current!.style.transform = `translate(${
            -imgWidth * (imgLen - 1)
          }px, 0px)`;
        } else {
          _setImageIndicatorCurIdx(curIdx - 1);
          placerEl.current!.style.transform = `translate(${
            -imgWidth * (curIdx - 1)
          }px, 0px)`;
        }
      }

      if (direction === "right") {
        if (curIdx === imgLen - 1) {
          _setImageIndicatorCurIdx(0); // curIdx is 0
          placerEl.current!.style.transform = `translate(0px, 0px)`;
        } else {
          _setImageIndicatorCurIdx(curIdx + 1);
          placerEl.current!.style.transform = `translate(${
            -imgWidth * (curIdx + 1)
          }px, 0px)`;
        }
      }
    },
    [imgLen, curIdx, _setImageIndicatorCurIdx, imgWidth]
  );
};

export default ImageMoveTo;
