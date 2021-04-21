import React, { useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateCurrentImagesPlacerIndex } from "../../../../store/action";
import {
  MainCarouselImageFetchState,
  MainCarouselImageState,
} from "../../../../typings/type";

export const useMoveTo = () => {
  const dispatch = useDispatch();
  const [_, setImagePlacerPosX] = useState(0);

  const imagesPlacerEl = useSelector(
    (state: MainCarouselImageState) => state.imagesPlacerRef,
    shallowEqual
  );

  const imagesCount = useSelector(
    (state: MainCarouselImageFetchState) => state.imagesCount,
    shallowEqual
  );

  const currentImagesPlacerIndex = useSelector(
    (state: MainCarouselImageState) => state.currentImagesPlacerIndex,
    shallowEqual
  );

  const _updateCurrentImagesPlacerIndex = useCallback(
    (newIdx: number) => dispatch(updateCurrentImagesPlacerIndex(newIdx)),
    [dispatch]
  );

  return {
    onMoveToLeft: useCallback(
      (_: React.SyntheticEvent<HTMLDivElement>) => {
        if (!imagesPlacerEl?.current) {
          return;
        }

        // position that moves per click
        let movementStep: number = 0;
        const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
          .width;

        // check it's good to move
        if (currentImagesPlacerIndex === 0) {
          // curIdx is max
          _updateCurrentImagesPlacerIndex(imagesCount - 1);
          movementStep = -(totalWidth - totalWidth / imagesCount); // totalWidth - 1 block
        } else {
          _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex - 1);
          // position that moves per click
          movementStep = totalWidth / imagesCount;
        }

        // move Image position
        setImagePlacerPosX((prv: number) => {
          const nextPos = prv + movementStep;
          imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
          return nextPos;
        });
      },
      [
        imagesPlacerEl,
        setImagePlacerPosX,
        imagesCount,
        currentImagesPlacerIndex,
        _updateCurrentImagesPlacerIndex,
      ]
    ),

    onMoveToRight: useCallback(
      (_: React.SyntheticEvent<HTMLDivElement>) => {
        if (!imagesPlacerEl?.current) {
          return;
        }

        // position that moves per click
        let movementStep: number = 0;
        const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
          .width;

        if (currentImagesPlacerIndex === imagesCount - 1) {
          _updateCurrentImagesPlacerIndex(0); // curIdx is 0
          movementStep = -(totalWidth - totalWidth / imagesCount); // totalWidth - 1 block
        } else {
          // check it's good to move
          _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex + 1);
          // position that moves per click
          movementStep = totalWidth / imagesCount;
        }

        // move Image position
        setImagePlacerPosX((prv: number) => {
          const nextPos = prv - movementStep;
          imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
          return nextPos;
        });
      },
      [
        imagesPlacerEl,
        setImagePlacerPosX,
        imagesCount,
        currentImagesPlacerIndex,
        _updateCurrentImagesPlacerIndex,
      ]
    ),
  };
};
