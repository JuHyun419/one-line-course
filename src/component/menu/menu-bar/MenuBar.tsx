import React, { Fragment, useContext } from "react";

import MenuBarProps from "./MenuBarProps";
import { EMenuMode } from "../EMenuMode";
import { DarkModeContext } from "../../../context/darkMode/DarkModeContext";
import { ViewModeContext } from "../../../context/viewMode/ViewModeContext";
import getIcon from "../../../common/Icons";
import Separator from "../../../component/separator/Separator";
import { ESeparatorDirection } from "../../../component/separator/ESeparatorDirection";
import "./_MenuBar.scss";

/**
 *
 * @returns
 */
const MenuBar: React.FC<MenuBarProps> = ({ menuMode }: MenuBarProps) => {
  const darkModeCtx = useContext(DarkModeContext);
  console.log(darkModeCtx);

  const viewModeCtx = useContext(ViewModeContext);
  console.log(viewModeCtx);

  return (
    <div className="menu-bar">
      {/* {makeDarkModeIndicator(darkModeCtx.isDark)} */}
      {makeMenuBarItems(
        menuMode,
        darkModeCtx.toggleDarkMode,
        viewModeCtx.toggleViewMode
      )}
      {/* {makeViewModeIndicator(viewModeCtx.isGrid)} */}
    </div>
  );
};

export default MenuBar;

/**
 *
 * @param menuMode
 * @returns
 */
const makeMenuBarItems = (
  menuMode: EMenuMode,
  toggleDarkMode: () => void,
  toggleViewMode: () => void
): JSX.Element => {
  switch (menuMode) {
    case EMenuMode.BeforeLogin:
      return (
        // only sun & moon
        <Fragment>
          {getIcon("Sun", toggleDarkMode)}
          {getIcon("Moon", toggleDarkMode)}
        </Fragment>
      );

    case EMenuMode.AfterLogin:
      return (
        // light & dark + grid & list
        <Fragment>
          {getIcon("Sun", toggleDarkMode)}
          {getIcon("Moon", toggleDarkMode)}
          <Separator direction={ESeparatorDirection.Vertical} />
          {getIcon("Grid", toggleViewMode)}
          {getIcon("List", toggleViewMode)}
        </Fragment>
      );

    default:
      throw new Error("Can't reach at here!");
  }
};

const makeDarkModeIndicator = (isDark: boolean) => (
  <Fragment>
    {isDark
      ? getIcon("MenuItemIndicator", undefined, { opacity: 0.7 })
      : getIcon("MenuItemIndicator", undefined, { opacity: 0.7 })}
  </Fragment>
);

const makeViewModeIndicator = (isGrid: boolean) => (
  <Fragment>
    {isGrid
      ? getIcon("MenuItemIndicator", undefined, { opacity: 0.7 })
      : getIcon("MenuItemIndicator", undefined, { opacity: 0.7 })}
  </Fragment>
);
