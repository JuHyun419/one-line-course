import React from "react";

import { NavFactory, ENavType } from "../../component/nav/";
import { placeIconsRandomly } from "../../common/";

import "./_Comments.scss";

const Comments = () => {
  return (
    <div className="page comments">
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={1} />
      Comments!!
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Comments;
