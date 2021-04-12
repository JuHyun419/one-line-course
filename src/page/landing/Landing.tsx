import React from "react";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";

import "./_Landing.scss";

const Landing: React.FC<{}> = () => {
  return (
    <div className="landing">
      <NavFactory navType={ENavType.Landing} />
    </div>
  );
};

export default Landing;
