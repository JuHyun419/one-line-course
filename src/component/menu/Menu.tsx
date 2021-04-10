import React from "react";
import MenuHamburger from "./MenuHamburger";
import "./_Menu.scss";

const Menu: React.FC<{}> = () => {
  return (
    <div>
      <MenuHamburger />
      <MenuHamburger />
      <MenuHamburger />
    </div>
  );
};

export default Menu;
