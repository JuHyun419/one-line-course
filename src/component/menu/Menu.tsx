import React, { useState, useCallback, Fragment } from "react";

import DarkModeCtxProvider from "../../context/darkMode/DarkModeCtx";

import MenuHamburger from "./MenuHamburger";
import MenuProps from "./MenuProps";
import { EMenuMode } from "./EMenuMode";
import MenuBar from "./menu-bar/MenuBar";
import ViewModeCtxProvider from "../../context/viewMode/ViewModeCtx";
import "./_Menu.scss";

const Menu: React.FC<MenuProps> = ({
  menuMode = EMenuMode.AfterLogin,
}: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      setIsMenuOpen(prv => !prv);
    },
    [setIsMenuOpen]
  );

  return (
    <Fragment>
      <div className="menu" onClick={onClickMenu}>
        <MenuHamburger />
        <MenuHamburger />
        <MenuHamburger />
      </div>
      <DarkModeCtxProvider>
        <ViewModeCtxProvider>
          {/* TODO: open, close animation */}
          <MenuBar menuMode={menuMode} isMenuOpen={isMenuOpen} />
        </ViewModeCtxProvider>
      </DarkModeCtxProvider>
    </Fragment>
  );
};

export default Menu;
