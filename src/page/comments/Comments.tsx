import React from "react";
import { EMenuMode, ENavType } from "../../typings";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "../../common/";
import Menu from "~/src/component/menu/Menu";
import GoToTop from "~/src/component/goToTop/GoToTop";

import "./_Comments.scss";

const Comments = () => {
  return (
    <div className="page comments">
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={1} />
      Comments!!
      <GoToTop />
      <Menu menuMode={EMenuMode.BeforeLogin} />
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Comments;
