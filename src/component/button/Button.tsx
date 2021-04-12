import React from "react";
// import { NavLink } from "react-router-dom";

import ButtonProps, {
  // TNavLinkToAndExact,
  // isTNavLinkToAndExact,
  TOnClick,
} from "./ButtonProps";

import { EButtonType } from "./EButtonType";
import { EButtonSize } from "./EButtonSize";
import { joinClasses } from "../../common/StyleHelper";

import "./_Button.scss";
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
      // ["btn", btnType.toString(), btnSize.toString()].join(" ")
      className={joinClasses("btn", btnType.toString(), btnSize.toString())}
      onClick={onClick}
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
