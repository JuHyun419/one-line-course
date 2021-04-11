import React from "react";
import { joinClasses } from "./StyleHelper";
import { IconClassNames } from "./IconsResources";

import "./_Icons.scss";

/**
 * Font-Awesome static class
 */
type TIconStyles = { [propName: string]: string | number };

/**
 *
 * @param iconName not case sensitive
 * @param additionalStyles
 * @returns
 */
export const getIcon = (
  iconName: string,
  onClick?: () => void,
  additionalStyles?: TIconStyles
): JSX.Element | null | undefined => {
  const classes = IconClassNames.get(iconName.trim());
  return classes ? (
    <i
      className={joinClasses("icon", ...classes)}
      style={additionalStyles}
      onClick={onClick}
    ></i>
  ) : null;
};
