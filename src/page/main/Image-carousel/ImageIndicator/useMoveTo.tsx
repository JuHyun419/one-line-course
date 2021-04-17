import React, { useCallback } from "react";

export const useMoveTo = (
  imagePlacerEl: React.RefObject<HTMLDivElement>,
  imageCount: number,
  setImagePlacerPosX: React.Dispatch<React.SetStateAction<number>>
) => {
  return {
    onMoveToLeft: useCallback(
      (_: React.SyntheticEvent<HTMLDivElement>) => {
        if (!imagePlacerEl.current) {
          return;
        }

        const movementStep =
          imagePlacerEl.current?.getBoundingClientRect().width / imageCount;
        setImagePlacerPosX((prv: number) => {
          const nextPos = prv + movementStep;
          imagePlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
          return nextPos;
        });
      },
      [imagePlacerEl, setImagePlacerPosX, imageCount]
    ),

    onMoveToRight: useCallback(
      (_: React.SyntheticEvent<HTMLDivElement>) => {
        if (!imagePlacerEl.current) {
          return;
        }

        const movementStep =
          imagePlacerEl.current?.getBoundingClientRect().width / imageCount;
        setImagePlacerPosX((prv: number) => {
          const nextPos = prv - movementStep;
          imagePlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
          return nextPos;
        });
      },
      [imagePlacerEl, setImagePlacerPosX, imageCount]
    ),
  };
};
