import React from "react";
import { EMenuMode, ENavType } from "../../typings";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
import { placeIconsRandomly } from "../../common/";

import "./_Bookmarks.scss";

const Bookmarks = () => {
  return (
    <div className="page bookmarks">
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={2} />
      Bookmarks!!
      <GoToTop />
      <Menu menuMode={EMenuMode.BeforeLogin} />
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Bookmarks;
