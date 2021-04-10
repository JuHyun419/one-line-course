import React from "react";

import "./_Button.scss";

import { ButtonProps } from "./ButtonProps";
import { EButtonType } from "./EButtonType";
import { EButtonSize } from "./EButtonSize";
import { joinClasses } from "../../common/StyleHelper";

/**
 *
 * @btnType decide the type among primary, alt, warning, danger...
 * @children mainly text inside the button
 * @returns JSX of button
 */
const Button: React.FC<ButtonProps> = ({
  btnSize = EButtonSize.Medium,
  btnType = EButtonType.Primary,
  onClick,
  children,
}) => {
  return (
    <div
      className={joinClasses("btn", btnType.toString(), btnSize.toString())}
      onClick={onClick}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
