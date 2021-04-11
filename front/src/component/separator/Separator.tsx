import React, { Fragment } from "react";
import { joinClasses } from "../../common/StyleHelper";
import { ESeparatorDirection } from "./ESeparatorDirection";
import SeparatorProps from "./SeparatorProps";
import "./_Separator.scss";

const Separator: React.FC<SeparatorProps> = ({ direction }: SeparatorProps) => {
  let separator: JSX.Element;
  switch (direction) {
    case ESeparatorDirection.Vertical:
      separator = <div className={joinClasses("separator-vertical")}></div>;
      break;

    case ESeparatorDirection.Horizontal:
      separator = <div className={joinClasses("separator-horizontal")}></div>;
      break;
  }
  return <Fragment>{separator}</Fragment>;
};

export default Separator;
