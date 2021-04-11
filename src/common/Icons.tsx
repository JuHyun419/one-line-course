import React from "react";
import { joinClasses, setCSSVariable } from "./StyleHelper";
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
    />
  ) : null;
};

export const getIconsRandomlyWithinRadius = (
  additionalStyles?: TIconStyles
): JSX.Element | null | undefined => {
  const iconsJSX: Array<JSX.Element> = [];
  Array.from(IconClassNames.values()).forEach(val => {
    const [el1, el2] = val;
    const iconClassName = `${el1} ${el2}`;
    console.log(iconClassName);
    iconsJSX.push(
      <i
        key={`${el1}--${el2}`}
        className={joinClasses("icon", "placed-randomly", iconClassName)}
        style={additionalStyles}
      />
    );
    console.log(iconsJSX);
  });

  return <div>{iconsJSX}</div>;
};
