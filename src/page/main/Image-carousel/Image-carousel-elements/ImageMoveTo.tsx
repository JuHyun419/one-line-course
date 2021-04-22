import React, { useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setCurIdx } from "../../../../store/action/carousel";
import { CombinedCarousel } from "../../../../store";
import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC = () => {
  // const { onMoveToLeft, onMoveToRight } = useMoveTo();
  const dispatch = useDispatch();
  const [_, setImagePlacerPosX] = useState(0);

  const imgEl = useSelector((state: CombinedCarousel) => state.carousel.ref);

  const imgLen = useSelector(
    (state: CombinedCarousel) => state.carouselAsync.urls?.length
  );

  const curIdx = useSelector(
    (state: CombinedCarousel) => state.carousel.idx,
    shallowEqual
  );

  const _setCurIdx = useCallback((idx: number) => dispatch(setCurIdx(idx)), [
    dispatch,
  ]);

  const onMoveToLeft = useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (!imgEl?.current) {
        return;
      }

      if (imgLen === undefined) {
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
      if (curIdx === 0) {
        _setCurIdx(imgLen - 1);
        nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
      } else {
        _setCurIdx(curIdx - 1);
        nextMovementStep = movementStep;
      }

      // move Image position
      setImagePlacerPosX((prv: number) => {
        const nextPos = prv + nextMovementStep;
        imgEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [imgEl, setImagePlacerPosX, imgLen, curIdx, _setCurIdx]
  );

  const onMoveToRight = useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      if (!imgEl?.current) {
        return;
      }

      if (imgLen === undefined) {
        return;
      }

      // position that moves per click
      let nextMovementStep: number = 0;
      // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
      //   .width;
      const totalWidth: number = window.innerWidth;
      console.log("imagePlacer total Width: ", totalWidth);
      const movementStep = totalWidth;

      if (curIdx === imgLen - 1) {
        _setCurIdx(0); // curIdx is 0
        nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
      } else {
        // check it's good to move
        _setCurIdx(curIdx + 1);
        // position that moves per click
        nextMovementStep = movementStep;
      }

      // move Image position
      setImagePlacerPosX((prv: number) => {
        const nextPos = prv - nextMovementStep;
        imgEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [imgEl, setImagePlacerPosX, imgLen, curIdx, _setCurIdx]
  );

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

// const useMoveTo = () => {
//   const dispatch = useDispatch();
//   const [_, setImagePlacerPosX] = useState(0);

//   const imagesPlacerEl = useSelector(
//     (state: CarouselState) => state.carousel.carouselRef
//   );

//   const totalImagesCount = useSelector(
//     (state: CarouselState) => state.imgFetcher.imgURLs.length,
//     shallowEqual
//   );

//   const currentImagesPlacerIndex = useSelector(
//     (state: CarouselState) => state.carousel.curIdx,
//     shallowEqual
//   );

//   const _updateCurrentImagesPlacerIndex = useCallback(
//     (newIdx: number) => dispatch(updateCurrentImagesPlacerIndex(newIdx)),
//     [dispatch]
//   );

//   return {
//     // onMoveToLeft: useCallback(
//     //   (_: React.SyntheticEvent<HTMLDivElement>) => {
//     //     if (!imagesPlacerEl?.current) {
//     //       return;
//     //     }

//     //     // position that moves per click
//     //     let nextMovementStep: number = 0;
//     //     // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
//     //     //   .width;
//     //     const totalWidth: number = window.innerWidth;
//     //     console.log("imagePlacer total Width: ", totalWidth);
//     //     // position that moves per click
//     //     const movementStep = totalWidth;

//     //     // curIdx is max
//     //     if (currentImagesPlacerIndex === 0) {
//     //       _updateCurrentImagesPlacerIndex(totalImagesCount - 1);
//     //       nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
//     //     } else {
//     //       _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex - 1);
//     //       nextMovementStep = movementStep;
//     //     }

//     //     // move Image position
//     //     setImagePlacerPosX((prv: number) => {
//     //       const nextPos = prv + nextMovementStep;
//     //       imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
//     //       return nextPos;
//     //     });
//     //   },
//     //   [
//     //     imagesPlacerEl,
//     //     setImagePlacerPosX,
//     //     totalImagesCount,
//     //     currentImagesPlacerIndex,
//     //     _updateCurrentImagesPlacerIndex,
//     //   ]
//     // ),
//     onMoveToLeft: (_: React.SyntheticEvent<HTMLDivElement>) => {
//       if (!imagesPlacerEl?.current) {
//         return;
//       }

//       // position that moves per click
//       let nextMovementStep: number = 0;
//       // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
//       //   .width;
//       const totalWidth: number = window.innerWidth;
//       console.log("imagePlacer total Width: ", totalWidth);
//       // position that moves per click
//       const movementStep = totalWidth;

//       // curIdx is max
//       if (currentImagesPlacerIndex === 0) {
//         _updateCurrentImagesPlacerIndex(totalImagesCount - 1);
//         nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
//       } else {
//         _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex - 1);
//         nextMovementStep = movementStep;
//       }

//       // move Image position
//       setImagePlacerPosX((prv: number) => {
//         const nextPos = prv + nextMovementStep;
//         imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
//         return nextPos;
//       });
//     },
//     onMoveToRight: (_: React.SyntheticEvent<HTMLDivElement>) => {
//       if (!imagesPlacerEl?.current) {
//         return;
//       }

//       // position that moves per click
//       let nextMovementStep: number = 0;
//       // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
//       //   .width;
//       const totalWidth: number = window.innerWidth;
//       console.log("imagePlacer total Width: ", totalWidth);
//       const movementStep = totalWidth;

//       if (currentImagesPlacerIndex === totalImagesCount - 1) {
//         _updateCurrentImagesPlacerIndex(0); // curIdx is 0
//         nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
//       } else {
//         // check it's good to move
//         _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex + 1);
//         // position that moves per click
//         nextMovementStep = movementStep;
//       }

//       // move Image position
//       setImagePlacerPosX((prv: number) => {
//         const nextPos = prv - nextMovementStep;
//         imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
//         return nextPos;
//       });
//     },

//     // onMoveToRight: useCallback(
//     //   (_: React.SyntheticEvent<HTMLDivElement>) => {
//     //     if (!imagesPlacerEl?.current) {
//     //       return;
//     //     }

//     //     // position that moves per click
//     //     let nextMovementStep: number = 0;
//     //     // const totalWidth: number = imagesPlacerEl.current?.getBoundingClientRect()
//     //     //   .width;
//     //     const totalWidth: number = window.innerWidth;
//     //     console.log("imagePlacer total Width: ", totalWidth);
//     //     const movementStep = totalWidth;

//     //     if (currentImagesPlacerIndex === totalImagesCount - 1) {
//     //       _updateCurrentImagesPlacerIndex(0); // curIdx is 0
//     //       nextMovementStep = totalWidth - movementStep; // totalWidth - 1 block
//     //     } else {
//     //       // check it's good to move
//     //       _updateCurrentImagesPlacerIndex(currentImagesPlacerIndex + 1);
//     //       // position that moves per click
//     //       nextMovementStep = movementStep;
//     //     }

//     //     // move Image position
//     //     setImagePlacerPosX((prv: number) => {
//     //       const nextPos = prv - nextMovementStep;
//     //       imagesPlacerEl.current!.style.transform = `translate(${nextPos}px, 0px)`;
//     //       return nextPos;
//     //     });
//     //   },
//     //   [
//     //     imagesPlacerEl,
//     //     setImagePlacerPosX,
//     //     totalImagesCount,
//     //     currentImagesPlacerIndex,
//     //     _updateCurrentImagesPlacerIndex,
//     //   ]
//     // ),
//   };
// };

export default ImageMoveTo;
