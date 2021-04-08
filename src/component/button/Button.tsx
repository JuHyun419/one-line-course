import React from "react";

import "./Button.scss";

import { EButtonType } from "./EButtonType";

interface Props {
  width: number;
  height: number;
  btnType?: EButtonType;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Button: React.FC<Props> = ({
  width,
  height,
  btnType = EButtonType.Primary,
  onClick,
}: Props) => (
  <React.Fragment>
    <div
      // className={CSSHelper.joinClasses("button", btnType.toString())}
      onClick={onClick}
    ></div>
  </React.Fragment>
);

export default Button;
