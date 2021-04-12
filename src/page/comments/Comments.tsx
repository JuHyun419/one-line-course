import React from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Comments.scss";

const Comments = () => {
  return (
    <div className={["page", "comments"].join(" ")}>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={1} />
      Comments!!
    </div>
  );
};

export default Comments;
