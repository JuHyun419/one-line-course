import React from "react";

import { joinClasses } from "../../common/StyleHelper";

const MenuHamburger: React.FC<{}> = () => (
  <React.Fragment>
    <div className={joinClasses("menu", "hamburger")}></div>
  </React.Fragment>
);

export default MenuHamburger;
