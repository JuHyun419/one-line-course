import React from "react";
import { EButtonSize, EButtonType, TOnClickButton } from "../../typings";

import { joinClasses } from "../../common/StyleHelper";

import "./_Button.scss";

interface ButtonProps {
  btnSize?: EButtonSize | undefined;
  btnType?: EButtonType | undefined;
  highlight?: boolean;
  additionalClassName?: string;
  additionalStyles?: { [prop: string]: string };
  onClick?:
    | TOnClickButton<HTMLDivElement>
    | ((e: React.MouseEvent<HTMLDivElement>) => void)
    | undefined;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  children?: any | undefined;
}

/**
 *
 * @btnType decide the type among primary, alt, warning, danger...
 * @children mainly text inside the button
 * @returns JSX of button
 */
const Button: React.FC<ButtonProps> = ({
  btnSize = EButtonSize.Medium,
  btnType = EButtonType.Primary,
  highlight = false,
  additionalClassName,
  additionalStyles,
  onClick,
  onKeyPress,
  children,
}) => {
  return (
    <div
      // ["btn", btnType.toString(), btnSize.toString()].join(" ")
      className={joinClasses(
        "btn",
        btnType.toString(),
        btnSize.toString(),
        `${highlight ? "highlight" : null}`,
        additionalClassName || ""
      )}
      style={additionalStyles}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;

// if (isTNavLinkToAndExact(onClick)) {
//   const [navTo, exact] = onClick as TNavLinkToAndExact;
//   return (
//     <div
//       className={["btn", btnType.toString(), btnSize.toString()].join(" ")}
//     >
//       <NavLink to={navTo} exact={exact}>
//         <span>{children}</span>
//       </NavLink>
//     </div>
//   );
// } else {
// }
