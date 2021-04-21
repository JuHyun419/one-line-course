import React, { useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateCurrentImagesPlacerIndex } from "../../../../store/action/carousel-async";
import { TCombinedStates } from "../../../../typings/type";
import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC = () => {
  // const { onMoveToLeft, onMoveToRight } = useMoveTo();
  const dispatch = useDispatch();
  const [_, setImagePlacerPosX] = useState(0);

  const imagesPlacerEl = useSelector(
    (state: TCombinedStates) => state.carousel.carouselRef
  );

  const totalImagesCount = useSelector(
    (state: TCombinedStates) => state.imgFetcher.imgURLs.length
  );

  const currentImagesPlacerIndex = useSelector(
    (state: TCombinedStates) =>
      state.carousel.curIdx,
    shallowEqual
  );

  const _updateCurrentImagesPlacerIndex = useCallback(
    (newIdx: number) => dispatch(updateCurrentImagesPlacerIndex(newIdx)),
    [dispatch]
  );

  const onMoveToLeft = useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (!imagesPlacerEl?.current) {
        return;
      }

      // position that moves per click
      let nextMovementStep: number = 0;
      // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
      //   .width;
      const totalWidth: number = window.innerWidth;
      console.log("imagePlacer total Width: ", totalWidth);
      // position that moves per click
      const movementStep = totalWidth;

      // curIdx is max
      if (currentImagesPlacerIndex === 0) {
        _updateCurrentImagesPlacerIndex(totalImagesCount - 1);
        nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
      } else {
        _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex - 1);
        nextMovementStep = movementStep;
      }

      // move Image position
      setImagePlacerPosX((prv: number) => {
        const nextPos = prv + nextMovementStep;
        imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [
      imagesPlacerEl,
      setImagePlacerPosX,
      totalImagesCount,
      currentImagesPlacerIndex,
      _updateCurrentImagesPlacerIndex,
    ]
  );

  const onMoveToRight = useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (!imagesPlacerEl?.current) {
        return;
      }

      // position that moves per click
      let nextMovementStep: number = 0;
      // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
      //   .width;
      const totalWidth: number = window.innerWidth;
      console.log("imagePlacer total Width: ", totalWidth);
      const movementStep = totalWidth;

      if (currentImagesPlacerIndex === totalImagesCount - 1) {
        _updateCurrentImagesPlacerIndex(0); // curIdx is 0
        nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
      } else {
        // check it's good to move
        _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex + 1);
        // position that moves per click
        nextMovementStep = movementStep;
      }

      // move Image position
      setImagePlacerPosX((prv: number) => {
        const nextPos = prv - nextMovementStep;
        imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [
      imagesPlacerEl,
      setImagePlacerPosX,
      totalImagesCount,
      currentImagesPlacerIndex,
      _updateCurrentImagesPlacerIndex,
    ]
  );

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

const useMoveTo = () => {
  const dispatch = useDispatch();
  const [_, setImagePlacerPosX] = useState(0);

  const imagesPlacerEl = useSelector(
    (state: TCombinedStates) => state.carousel.carouselRef
  );

  const totalImagesCount = useSelector(
    (state: TCombinedStates) => state.imgFetcher.imgURLs.length,
    shallowEqual
  );

  const currentImagesPlacerIndex = useSelector(
    (state: TCombinedStates) =>
      state.carousel.curIdx,
    shallowEqual
  );

  const _updateCurrentImagesPlacerIndex = useCallback(
    (newIdx: number) => dispatch(updateCurrentImagesPlacerIndex(newIdx)),
    [dispatch]
  );

  return {
    // onMoveToLeft: useCallback(
    //   (_: React.SyntheticEvent<HTMLDivElement>) => {
    //     if (!imagesPlacerEl?.current) {
    //       return;
    //     }

    //     // position that moves per click
    //     let nextMovementStep: number = 0;
    //     // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
    //     //   .width;
    //     const totalWidth: number = window.innerWidth;
    //     console.log("imagePlacer total Width: ", totalWidth);
    //     // position that moves per click
    //     const movementStep = totalWidth;

    //     // curIdx is max
    //     if (currentImagesPlacerIndex === 0) {
    //       _updateCurrentImagesPlacerIndex(totalImagesCount - 1);
    //       nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
    //     } else {
    //       _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex - 1);
    //       nextMovementStep = movementStep;
    //     }

    //     // move Image position
    //     setImagePlacerPosX((prv: number) => {
    //       const nextPos = prv + nextMovementStep;
    //       imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
    //       return nextPos;
    //     });
    //   },
    //   [
    //     imagesPlacerEl,
    //     setImagePlacerPosX,
    //     totalImagesCount,
    //     currentImagesPlacerIndex,
    //     _updateCurrentImagesPlacerIndex,
    //   ]
    // ),
    onMoveToLeft: (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (!imagesPlacerEl?.current) {
        return;
      }

      // position that moves per click
      let nextMovementStep: number = 0;
      // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
      //   .width;
      const totalWidth: number = window.innerWidth;
      console.log("imagePlacer total Width: ", totalWidth);
      // position that moves per click
      const movementStep = totalWidth;

      // curIdx is max
      if (currentImagesPlacerIndex === 0) {
        _updateCurrentImagesPlacerIndex(totalImagesCount - 1);
        nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
      } else {
        _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex - 1);
        nextMovementStep = movementStep;
      }

      // move Image position
      setImagePlacerPosX((prv: number) => {
        const nextPos = prv + nextMovementStep;
        imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    onMoveToRight: (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (!imagesPlacerEl?.current) {
        return;
      }

      // position that moves per click
      let nextMovementStep: number = 0;
      // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
      //   .width;
      const totalWidth: number = window.innerWidth;
      console.log("imagePlacer total Width: ", totalWidth);
      const movementStep = totalWidth;

      if (currentImagesPlacerIndex === totalImagesCount - 1) {
        _updateCurrentImagesPlacerIndex(0); // curIdx is 0
        nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
      } else {
        // check it's good to move
        _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex + 1);
        // position that moves per click
        nextMovementStep = movementStep;
      }

      // move Image position
      setImagePlacerPosX((prv: number) => {
        const nextPos = prv - nextMovementStep;
        imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },

    // onMoveToRight: useCallback(
    //   (_: React.SyntheticEvent<HTMLDivElement>) => {
    //     if (!imagesPlacerEl?.current) {
    //       return;
    //     }

    //     // position that moves per click
    //     let nextMovementStep: number = 0;
    //     // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
    //     //   .width;
    //     const totalWidth: number = window.innerWidth;
    //     console.log("imagePlacer total Width: ", totalWidth);
    //     const movementStep = totalWidth;

    //     if (currentImagesPlacerIndex === totalImagesCount - 1) {
    //       _updateCurrentImagesPlacerIndex(0); // curIdx is 0
    //       nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
    //     } else {
    //       // check it's good to move
    //       _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex + 1);
    //       // position that moves per click
    //       nextMovementStep = movementStep;
    //     }

    //     // move Image position
    //     setImagePlacerPosX((prv: number) => {
    //       const nextPos = prv - nextMovementStep;
    //       imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
    //       return nextPos;
    //     });
    //   },
    //   [
    //     imagesPlacerEl,
    //     setImagePlacerPosX,
    //     totalImagesCount,
    //     currentImagesPlacerIndex,
    //     _updateCurrentImagesPlacerIndex,
    //   ]
    // ),
  };
};

export default ImageMoveTo;
