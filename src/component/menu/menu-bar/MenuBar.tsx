import React from "react";
import MenuBarProps from "./MenuBarProps";
import { EMenuMode } from "../EMenuMode";
import "./_MenuBar.scss";

/**
 * 
 * @returns 
 */
const MenuBar: React.FC<MenuBarProps> = ({ menuMode }: MenuBarProps) => {
  return <div>{makeMenuBarItems(menuMode)}</div>;
};

export default MenuBar;

/**
 * 
 * @param menuMode 
 * @returns 
 */
const makeMenuBarItems = (menuMode: EMenuMode): JSX.Element => {
  let jsx: JSX.Element = <div></div>;

  switch (menuMode) {
    case EMenuMode.BeforeLogin:
      // TODO: Render Only light / dark mode feature
      break;

    case EMenuMode.AfterLogin:
      // TODO: Render light / dark mode + view mode feature
      break;

    default:
      throw new Error("Can't reach at here!");
  }
  return jsx;
};
