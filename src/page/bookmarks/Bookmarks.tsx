import React from "react";

import { NavFactory, ENavType } from "../../component/nav/";
import { placeIconsRandomly } from "../../common/";

import "./_Bookmarks.scss";

const Bookmarks = () => {
  return (
    <div className="page bookmarks">
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={2} />
      Bookmarks!!
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Bookmarks;
