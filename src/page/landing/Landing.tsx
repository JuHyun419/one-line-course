import React from "react";
import { ENavType } from "../../typings";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "../../common/";
import LandingInfoItems from "./landing-info-item/LandingInfoItems";
import Footer from "../../component/footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Landing;
