import React, { useState, useCallback, Fragment } from "react";

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
          <MenuBar menuMode={menuMode} isMenuOpen={isMenuOpen} />
        </ViewModeCtxProvider>
      </DarkModeCtxProvider>
    </Fragment>
  );
};

export default Menu;
