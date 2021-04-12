import React from "react";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";

import "./_Landing.scss";

const Landing: React.FC<{ history: any }> = ({ history }) => {
  return (
    <div className={["page", "landing"].join(" ")}>
      <NavFactory navType={ENavType.Landing} history={history} />
      Landing!!
    </div>
  );
};

export default Landing;
