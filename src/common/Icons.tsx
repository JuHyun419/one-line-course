import React from "react";
import { joinClasses } from "./";
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
  additionalStyles?: TIconStyles,
  additionalAttributes?: any
): JSX.Element | null | undefined => {
  const classes = IconClassNames.get(iconName.trim());
  return classes ? (
    <i
      className={joinClasses("icon", ...classes)}
      style={additionalStyles}
      onClick={onClick}
      {...additionalAttributes}
    />
  ) : null;
};

export const placeIconsRandomly = (
  count: number,
  additionalStyles?: TIconStyles
): JSX.Element | null | undefined => {
  if (count > 30 || count < 0) {
    throw new Error("random icons can't be under 0 or over 30!");
  }

  const asArr = Array.from(IconClassNames.values());
  const iconsJSX: Array<JSX.Element> = [];

  for (let i = 0, j = 0; i < count; ++i, ++j) {
    if (j >= IconClassNames.size) {
      j = 0;
    }
    const [el1, el2] = asArr[j]!;

    iconsJSX.push(
      <i
        key={`${i}--${el2}`}
        className={joinClasses("icon", "placed-randomly", `${el1} ${el2}`)}
        style={additionalStyles}
      />
    );
  }

  return <div>{iconsJSX}</div>;
};
