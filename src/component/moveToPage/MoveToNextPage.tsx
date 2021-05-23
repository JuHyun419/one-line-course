import React, { useEffect, useRef } from "react";
import { getIcon } from "~/src/common";

import "./_MoveToNextPage.scss";

interface IMoveToNextPageProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  disable: boolean;
}

const MoveToNextPage: React.FC<IMoveToNextPageProps> = ({
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
    <div className="moveToNextPage" ref={iconRef}>
      {getIcon("Right-Arrow", onClick, { fontSize: "5rem" })}
    </div>
  );
};

export default MoveToNextPage;
