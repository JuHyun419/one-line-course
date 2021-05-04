import React, { useCallback, Dispatch, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  ISetImageIndicatorCurIdxAction,
  setImageIndicatorCurIdx,
} from "../../../../store/action/carousel";
import { TCombinedStates } from "../../../../store";
import "./_ImageMoveTo.scss";
import Loading from "~/src/component/loading/Loading";

const ImageMoveTo: React.FC = () => {
  const dispatch = useDispatch();
  const placerEl = useSelector((state: TCombinedStates) => state.carousel.ref);
  const _setImageIndicatorCurIdx = useCallback(
    (idx: number) => dispatch(setImageIndicatorCurIdx(idx)),
    []
  );

  useEffect(() => {
    console.log("init!");
    _setImageIndicatorCurIdx(0);
    if (placerEl && placerEl.current) {
      placerEl.current!.style.transform = `translate(0px, 0px)`;
    }
  }, []);

  const onMoveToLeft = useMoveCarousel(
    "left",
    placerEl!,
    _setImageIndicatorCurIdx
  );
  const onMoveToRight = useMoveCarousel(
    "right",
    placerEl!,
    _setImageIndicatorCurIdx
  );

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

const useMoveCarousel = (
  direction: "left" | "right",
  placerEl: React.RefObject<HTMLDivElement>,
  _setImageIndicatorCurIdx: (idx: number) => ISetImageIndicatorCurIdxAction
) => {
  const imgLen = useSelector(
    (state: TCombinedStates) => state.carouselAsync.urls?.length
  );

  const curIdx = useSelector((state: TCombinedStates) => state.carousel.idx);

  const imgWidth = useSelector(
    (state: TCombinedStates) => state.carousel.imgWidth
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
    [imgLen, curIdx, _setImageIndicatorCurIdx, imgWidth, placerEl]
  );
};

export default ImageMoveTo;
