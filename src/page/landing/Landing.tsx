import React from "react";
import { placeIconsRandomly } from "../../common/Icons";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import LandingInfoItems from "./landing-info-item/LandingInfoItems";

import "./_Landing.scss";

const Landing: React.FC<{ history: any }> = ({ history }) => {
  return (
    <div className={["page", "landing"].join(" ")}>
      <NavFactory navType={ENavType.Landing} history={history} />
      <LandingInfoItems />
      {placeIconsRandomly(30, {fontSize: "2rem"})}
    </div>
  );
};

export default Landing;
