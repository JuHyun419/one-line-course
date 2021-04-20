import React, { Fragment } from "react";
import "./_Separator.scss";

interface SeparatorProps {
  direction: ESeparatorDirection;
  length?: number;
  width?: number;
}

const Separator: React.FC<SeparatorProps> = ({
  direction,
  length,
  width,
}: SeparatorProps) => {
  let separator: JSX.Element | null = null;
  
  switch (direction) {
    case ESeparatorDirection.Vertical:
      separator = (
        <div
          className="separator-vertical"
          style={{ width: `${width}px`, height: `${length}px` }}
        ></div>
      );
      break;

    case ESeparatorDirection.Horizontal:
      separator = (
        <div
          className="separator-horizontal"
          style={{ width: `${length}px`, height: `${width}px` }}
        ></div>
      );
      break;
  }
  return <Fragment>{separator}</Fragment>;
};

export default Separator;
