import React, { useState, useCallback } from "react";

import MenuHamburger from "./MenuHamburger";
import MenuProps from "./MenuProps";
import { EMenuMode } from "./EMenuMode";
import MenuBar from "./menu-bar/MenuBar";
import "./_Menu.scss";

const Menu: React.FC<MenuProps> = ({
  menuMode = EMenuMode.AfterLogin,
}: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = useCallback(() => {
    setIsMenuOpen(prv => !prv);
  }, [setIsMenuOpen]);

  return (
    <div onClick={onClickMenu}>
      <MenuHamburger />
      <MenuHamburger />
      <MenuHamburger />
      {isMenuOpen ?? <MenuBar menuMode={menuMode} />}
    </div>
  );
};

export default Menu;
