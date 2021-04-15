import React from "react";
import { placeIconsRandomly } from "../../common/Icons";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import LandingInfoItems from "./landing-info-item/LandingInfoItems";

import "./_Landing.scss";
import "../_Page.scss";

const Landing: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory navType={ENavType.Landing} />
      <div className="page">
        <LandingInfoItems />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
    </div>
  );
};

export default Landing;
