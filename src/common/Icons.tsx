import React from "react";
import { joinClasses } from "./StyleHelper";

/**
 * Font-Awesome static class
 */
type TIconStyles = { [propName: string]: string | number };

const IconClassNames = new Map<string, Array<string>>();

IconClassNames.set("Grid", ["fas", "fa-th"]);
IconClassNames.set("Sun", ["fas", "fa-sun"]);
IconClassNames.set("Moon", ["fas", "fa-moon"]);
IconClassNames.set("List", ["far", "fa-list-alt"]);
IconClassNames.set("MenuItemIndicator", ["fas", "fa-crop-alt"]);

/**
 *
 * @param iconName not case sensitive
 * @param additionalStyles
 * @returns
 */
export default function getIcon(
  iconName: string,
  onClick?: () => void,
  additionalStyles?: TIconStyles
): JSX.Element | null | undefined {
  const classes = IconClassNames.get(iconName.trim());
  return classes ? (
    <i
      className={joinClasses(...classes)}
      style={additionalStyles}
      onClick={onClick}
    ></i>
  ) : null;
}
