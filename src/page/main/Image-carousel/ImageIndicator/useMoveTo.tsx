import React, { useState, useCallback } from "react";

export const useMoveTo = (
  imagePlacerEl: React.RefObject<HTMLDivElement>,
  imageCount: number
) => {
  const [curIdx, setCurIdx] = useState(0);
  const [_, setImagePlacerPosX] = useState(0);

  return {
    onMoveToLeft: useCallback(
      (_: React.SyntheticEvent<HTMLDivElement>) => {
        if (!imagePlacerEl.current) {
          return;
        }

        // position that moves per click
        let movementStep: number = 0;
        const totalWidth: number = imagePlacerEl.current?.getBoundingClientRect()
          .width;

        if (curIdx === 0) {
          setCurIdx(imageCount - 1); // curIdx is max
          movementStep = -(totalWidth - totalWidth / imageCount); // totalWidth - 1 block
        } else {
          // check it's good to move
          setCurIdx(prv => prv - 1);
          // position that moves per click
          movementStep = totalWidth / imageCount;
        }

        // move Image position
        setImagePlacerPosX((prv: number) => {
          const nextPos = prv + movementStep;
          imagePlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
          return nextPos;
        });
      },
      [imagePlacerEl, setImagePlacerPosX, imageCount, curIdx, setCurIdx]
    ),

    onMoveToRight: useCallback(
      (_: React.SyntheticEvent<HTMLDivElement>) => {
        if (!imagePlacerEl.current) {
          return;
        }

        // position that moves per click
        let movementStep: number = 0;
        const totalWidth: number = imagePlacerEl.current?.getBoundingClientRect()
          .width;

        if (curIdx === imageCount - 1) {
          setCurIdx(0); // curIdx is 0
          movementStep = -(totalWidth - totalWidth / imageCount); // totalWidth - 1 block
        } else {
          // check it's good to move
          setCurIdx(prv => prv + 1);
          // position that moves per click
          movementStep = totalWidth / imageCount;
        }

        // move Image position
        setImagePlacerPosX((prv: number) => {
          const nextPos = prv - movementStep;
          imagePlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
          return nextPos;
        });
      },
      [imagePlacerEl, setImagePlacerPosX, imageCount, curIdx, setCurIdx]
    ),
  };
};
