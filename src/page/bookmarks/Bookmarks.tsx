import React from "react";
import { ENavType } from "../../typings/type";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
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