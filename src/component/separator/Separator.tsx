import React, { Fragment } from "react";
import { joinClasses } from "../../common/StyleHelper";
import { ESeparatorDirection } from "./ESeparatorDirection";
import SeparatorProps from "./SeparatorProps";
import "./_Separator.scss";

const Separator: React.FC<SeparatorProps> = ({
  direction,
  length,
  width,
}: SeparatorProps) => {
  let separator: JSX.Element;
  switch (direction) {
    case ESeparatorDirection.Vertical:
      separator = (
        <div
          className={joinClasses("separator-vertical")}
          style={{ width: `${width}px`, height: `${length}px` }}
        ></div>
      );
      break;

    case ESeparatorDirection.Horizontal:
      separator = (
        <div
          className={joinClasses("separator-horizontal")}
          style={{ width: `${length}px`, height: `${width}px` }}
        ></div>
      );
      break;
  }
  return <Fragment>{separator}</Fragment>;
};

export default Separator;
