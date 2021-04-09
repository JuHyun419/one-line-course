import React from "react";

import "./Button.scss";

import { EButtonType } from "./EButtonType";
import { joinClasses } from "../../common/StyleHelper";

interface Props {
  width: number;
  height: number;
  btnType?: EButtonType;
  children?: any;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 *
 * @width of button
 * @height of button
 * @btnType decide the type among primary, alt, warning, danger...
 * @children mainly text inside the button
 * @returns JSX of button
 */
const Button: React.FC<Props> = ({
  width,
  height,
  btnType = EButtonType.Primary,
  onClick,
  children,
}: Props) => (
  <div
    className={joinClasses("button", btnType.toString())}
    style={{ width, height }} // width, height re-def
    onClick={onClick}
  >
    {children}
  </div>
);

export default Button;
