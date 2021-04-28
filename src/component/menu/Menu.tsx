import React, { useState, useCallback } from "react";
import { EMenuMode } from "../../typings";

import { DarkModeCtxProvider } from "../../context/DarkModeCtx";
import { ViewModeCtxProvider } from "../../context/ViewModeCtx";

import MenuHamburger from "./MenuHamburger";
import MenuBar from "./menu-bar/MenuBar";

import "./_Menu.scss";

interface MenuProps {
  menuMode: EMenuMode;
}

const Menu: React.FC<MenuProps> = ({ menuMode = EMenuMode.AfterLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = useCallback(
    (_: React.MouseEvent<HTMLDivElement>) => setIsMenuOpen(prv => !prv),
    [setIsMenuOpen]
  );

  return (
    <div className="menu-placer">
      <DarkModeCtxProvider>
        <ViewModeCtxProvider>
          <MenuBar menuMode={menuMode} isMenuOpen={isMenuOpen} />
        </ViewModeCtxProvider>
      </DarkModeCtxProvider>
      <div className="menu" onClick={onClickMenu}>
        <MenuHamburger />
        <MenuHamburger />
        <MenuHamburger />
      </div>
    </div>
  );
};

export default Menu;
