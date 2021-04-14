import React from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Bookmarks.scss";
import { placeIconsRandomly } from "../../common/Icons";

const Bookmarks = () => {
  return (
    <div className={["page", "bookmarks"].join(" ")}>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={2} />
      Bookmarks!!
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Bookmarks;
