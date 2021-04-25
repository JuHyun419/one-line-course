import React, { useState, useCallback, Fragment } from "react";
import { EMenuMode } from "../../typings/type";

import { DarkModeCtxProvider } from "../../context/DarkModeCtx";
import { ViewModeCtxProvider } from "../../context/ViewModeCtx";

import MenuHamburger from "./MenuHamburger";
import MenuBar from "./menu-bar/MenuBar";

import "./_Menu.scss";

interface MenuProps {
  menuMode: EMenuMode;
}

const Menu: React.FC<MenuProps> = ({
  menuMode = EMenuMode.AfterLogin,
}: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = useCallback(
    (_: React.MouseEvent<HTMLDivElement>) => setIsMenuOpen(prv => !prv),
    []
  );

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Menu;
