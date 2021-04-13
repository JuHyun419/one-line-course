import React from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Main.scss";
import { placeIconsRandomly } from "../../common/Icons";

const Main = () => {
  return (
    <div className={["page", "main"].join(" ")}>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
      Main !!
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default Main;
