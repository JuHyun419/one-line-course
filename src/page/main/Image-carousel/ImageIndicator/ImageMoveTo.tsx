import React, { useCallback, useMemo, useState } from "react";

import "./_ImageMoveTo.scss";

const ImageMoveTo: React.FC<{
  carouselRef: React.RefObject<HTMLDivElement>;
}> = ({ carouselRef }) => {
  const [_, setCarouselPosX] = useState(0);

  const movementStep = useMemo(() => window.innerWidth, [window]);
  console.log("available width: ", movementStep);

  const onMoveToLeft = useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      setCarouselPosX((prv: number) => {
        const nextPos = prv + movementStep;
        carouselRef.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [carouselRef, setCarouselPosX]
  );

  const onMoveToRight = useCallback(
    (_: React.SyntheticEvent<HTMLDivElement>) => {
      setCarouselPosX((prv: number) => {
        const nextPos = prv - movementStep;
        carouselRef.current!.style.transform = `translate(${nextPos}px, 0px)`;
        return nextPos;
      });
    },
    [carouselRef, setCarouselPosX]
  );

  return (
    <div className="imageMoveTo">
      <div onClick={onMoveToLeft}>&larr;</div>
      <div onClick={onMoveToRight}>&rarr;</div>
    </div>
  );
};

export default ImageMoveTo;
