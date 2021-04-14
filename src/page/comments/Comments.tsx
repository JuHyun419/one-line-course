import React from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Comments.scss";
import { placeIconsRandomly } from "../../common/Icons";

const Comments = () => {
  return (
    <div className={["page", "comments"].join(" ")}>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={1} />
      Comments!!
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Comments;
