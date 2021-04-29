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
  const icon = getIcon("Right-Arrow", onClick, { fontSize: "5rem" });
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    if (disable) {
      iconRef.current.style.color = "rgba(100, 100, 100, 0.2)";
    } else {
      iconRef.current.style.color = "rgba(100, 100, 100, 1)";
    }
  }, [disable]);

  return (
    <div className="moveToNextPage" ref={iconRef}>
      {icon}
    </div>
  );
};

export default MoveToNextPage;
