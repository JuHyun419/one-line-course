import React, { useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  ISetImageIndicatorCurIdxAction,
  setImageIndicatorCurIdx,
} from "../../../../store/action/carousel";
import { TCombinedStates } from "../../../../store";
import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC = () => {
  const dispatch = useDispatch();
  const [_, setPlacerPos] = useState(0);

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

  const onMoveToLeft = useMoveCarousel(
    "left",
    placerEl,
    setPlacerPos,
    imgLen,
    curIdx,
    _setImageIndicatorCurIdx,
    imgWidth
  );

  const onMoveToRight = useMoveCarousel(
    "right",
    placerEl,
    setPlacerPos,
    imgLen,
    curIdx,
    _setImageIndicatorCurIdx,
    imgWidth
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
  placerEl: React.RefObject<HTMLDivElement> | undefined,
  setPlacerPos: React.Dispatch<React.SetStateAction<number>>,
  imgLen: number | undefined,
  curIdx: number,
  _setCurIdx: (idx: number) => ISetImageIndicatorCurIdxAction,
  imgWidth: number | undefined
) =>
  useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (
        !placerEl?.current ||
        imgLen === undefined ||
        imgWidth === undefined
      ) {
        return;
      }

      // position that moves per click
      let nextMovementStep: number = 0;

      if (direction === "left") {
        // curIdx is max
        if (curIdx === 0) {
          _setCurIdx(imgLen - 1);
          nextMovementStep = -imgWidth * (imgLen - 1); // totalWidth - 1 block
        } else {
          _setCurIdx(curIdx - 1);
          nextMovementStep = imgWidth;
        }
      }

      if (direction === "right") {
        if (curIdx === imgLen - 1) {
          _setCurIdx(0); // curIdx is 0
          nextMovementStep = imgWidth * (imgLen - 1); // totalWidth - 1 block
        } else {
          // check it's good to move
          _setCurIdx(curIdx + 1);
          nextMovementStep = -imgWidth;
        }
      }

      // move Image position
      setPlacerPos((prv: number) => {
        const nextPos = prv + nextMovementStep;
        // console.log("next pos: ", nextPos, " px");
        placerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [placerEl, setPlacerPos, imgLen, curIdx, _setCurIdx, imgWidth]
  );

export default ImageMoveTo;