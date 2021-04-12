import React from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Bookmarks.scss";

const Bookmarks = () => {
  return (
    <div className={["page", "bookmarks"].join(" ")}>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={2} />
      Bookmarks!!
    </div>
  );
};

export default Bookmarks;
