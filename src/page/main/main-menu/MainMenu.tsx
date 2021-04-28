import React from "react";
import Menu from "../../../component/menu/Menu";
import { EMenuMode } from "../../../typings";

import "./_MainMenu.scss";

const MainMenu: React.FC = () => {
  return (
    <div className="main--menu">
      <Menu menuMode={EMenuMode.AfterLogin} />
    </div>
  );
};

export default MainMenu;
