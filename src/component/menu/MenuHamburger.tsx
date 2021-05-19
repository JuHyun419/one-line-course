import React from "react";

import { joinClasses } from "../../common/StyleHelper";

const MenuHamburger: React.FC<{}> = () => (
  <>
    <div className={joinClasses("menu", "hamburger")}></div>
  </>
);

export default MenuHamburger;
