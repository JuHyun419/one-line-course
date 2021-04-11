import React, { Fragment, useContext } from "react";

import { joinClasses } from "../../../common/StyleHelper";
import MenuBarProps from "./MenuBarProps";
import { EMenuMode } from "../EMenuMode";
import { DarkModeContext } from "../../../context/darkMode/DarkModeContext";
import { ViewModeContext } from "../../../context/viewMode/ViewModeContext";
import { getIcon } from "../../../common/Icons";
import Separator from "../../../component/separator/Separator";
import { ESeparatorDirection } from "../../../component/separator/ESeparatorDirection";
import ViewModeContextData from "../../../context/viewMode/ViewModeContextData";
import DarkModeContextData from "../../../context/darkMode/DarkModeContextData";
import "./_MenuBar.scss";

/**
 *
 * @returns
 */
const MenuBar: React.FC<MenuBarProps> = ({
  menuMode,
  isMenuOpen,
}: MenuBarProps) => {
  const darkModeCtx = useContext(DarkModeContext);
  const viewModeCtx = useContext(ViewModeContext);

  return (
    <div className={joinClasses("menu-bar", isMenuOpen ? "open" : "closed")}>
      {makeMenuBarItems(menuMode, darkModeCtx, viewModeCtx)}
    </div>
  );
};

const makeMenuBarItems = (
  menuMode: EMenuMode,
  darkModeCtx: DarkModeContextData,
  viewModeCtx: ViewModeContextData
): JSX.Element => {
  const iconBasicStyles = {
    fontSize: "2rem",
    boxSize: "border-box",
    // transition: "0.5s",
  };

  const darkIndicatorForSun = {
    border: !darkModeCtx.isDark ? "2px dashed #000" : "0",
  };

  const sunIconStyles = {
    ...iconBasicStyles,
    ...darkIndicatorForSun,
  };

  const darkIndicatorForMoon = {
    border: darkModeCtx.isDark ? "2px dashed #000" : "0",
  };

  const moonIconStyles = {
    ...iconBasicStyles,
    ...darkIndicatorForMoon,
  };

  switch (menuMode) {
    case EMenuMode.BeforeLogin:
      return makeMenuBarItemsBeforeLogin(
        darkModeCtx.toggleDarkMode,
        sunIconStyles,
        moonIconStyles
      );

    case EMenuMode.AfterLogin:
      const viewModeIndicatorForGrid = {
        border: viewModeCtx.isGrid ? "2px dashed #000" : "0",
      };

      const gridIconStyles = {
        ...iconBasicStyles,
        ...viewModeIndicatorForGrid,
      };

      const viewModeIndicatorForList = {
        border: !viewModeCtx.isGrid ? "2px dashed #000" : "0",
      };

      const listIconStyles = {
        ...iconBasicStyles,
        ...viewModeIndicatorForList,
      };

      return makeMenuBarItemsAfterLogin(
        darkModeCtx.toggleDarkMode,
        viewModeCtx.toggleViewMode,
        sunIconStyles,
        moonIconStyles,
        gridIconStyles,
        listIconStyles
      );
      break;
  }
};

const makeMenuBarItemsBeforeLogin = (
  toggleDarkMode: () => void,
  ...iconStyles: Array<{ [content: string]: string }>
): JSX.Element => (
  // only sun & moon
  <Fragment>
    {getIcon("Sun", toggleDarkMode, iconStyles[0])}
    {getIcon("Moon", toggleDarkMode, iconStyles[1])}
  </Fragment>
);

const makeMenuBarItemsAfterLogin = (
  toggleDarkMode: () => void,
  toggleViewMode: () => void,
  ...iconStyles: Array<{ [content: string]: string }>
) => (
  <Fragment>
    {getIcon("Sun", toggleDarkMode, iconStyles[0])}
    {getIcon("Moon", toggleDarkMode, iconStyles[1])}
    <Separator direction={ESeparatorDirection.Vertical} />
    {getIcon("Grid", toggleViewMode, iconStyles[2])}
    {getIcon("List", toggleViewMode, iconStyles[3])}
  </Fragment>
);

export default MenuBar;
