import React from "react";
import { ENavType } from "../../typings/type";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
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
