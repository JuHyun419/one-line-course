import React, { useContext } from "react";
import MenuBarProps from "./MenuBarProps";
import { EMenuMode } from "../EMenuMode";
import "./_MenuBar.scss";
import { DarkModeContext } from "../../../context/darkMode/DarkModeContext";
import Icons from "../../../common/Icons";
// import { joinClasses } from "../../../common/StyleHelper";

/**
 *
 * @returns
 */
const MenuBar: React.FC<MenuBarProps> = ({ menuMode }: MenuBarProps) => {
  const darkModeCtx = useContext(DarkModeContext);
  return (
    <div>
      {makeMenuBarItems(
        menuMode,
        darkModeCtx.isDark,
        darkModeCtx.toggleDarkMode
      )}
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
  isDark: boolean,
  toggleDarkMode: () => void
): JSX.Element => {
  let jsx: JSX.Element;
  switch (menuMode) {
    case EMenuMode.BeforeLogin:
      // light / dark mode feature
      jsx = (
        <div className="menu-bar">
          {Icons.SunIcon}
          {Icons.MoonIcon}
          {Icons.GridIcon}
          {Icons.ListIcon}
        </div>
      );
      break;

    case EMenuMode.AfterLogin:
      jsx = <div className="menu-bar"></div>;
      // light / dark mode feature

      // view mode
      break;

    default:
      throw new Error("Can't reach at here!");
  }
  return jsx;
};
