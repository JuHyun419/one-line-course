import React, { useEffect, useRef } from "react";
import { getIcon } from "~/src/common";

import "./_MoveToPreviousPage.scss";

interface IMoveToPreviousPageProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  disable: boolean;
}

const MoveToPreviousPage: React.FC<IMoveToPreviousPageProps> = ({
  onClick,
  disable = false,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    iconRef.current.style.color = `rgba(100, 100, 100, ${
      disable ? "0.2" : "1"
    })`;
  }, [disable]);

  return (
    <div className="moveToPreviousPage" ref={iconRef}>
      {getIcon("Left-Arrow", onClick, { fontSize: "5rem" })}
    </div>
  );
};

export default MoveToPreviousPage;
