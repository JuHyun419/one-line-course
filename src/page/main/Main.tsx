import React from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Main.scss";
import { placeIconsRandomly } from "../../common/Icons";
import Footer from "../../component/footer/Footer";

const Main: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
      
      <div className="page">{placeIconsRandomly(30, { fontSize: "2rem" })}</div>
      <Footer />
    </div>
  );
};

export default Main;
