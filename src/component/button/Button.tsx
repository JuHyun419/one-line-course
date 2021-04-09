import React from "react";

import "./_Button.scss";

import { ButtonProps } from "./ButtonProps";
import { EButtonType } from "./EButtonType";
import { joinClasses } from "../../common/StyleHelper";

/**
 *
 * @width of button
 * @height of button
 * @btnType decide the type among primary, alt, warning, danger...
 * @children mainly text inside the button
 * @returns JSX of button
 */
const Button: React.FC<ButtonProps> = ({
  width,
  height,
  btnType = EButtonType.Primary,
  onClick,
  children,
}) => {
  return (
    <div
      className={joinClasses("btn", btnType.toString())}
      style={{ width, height }} // width, height re-def
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
