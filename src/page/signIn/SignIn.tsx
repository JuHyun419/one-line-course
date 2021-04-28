import React from "react";
import { ENavType } from "~/src/typings";
import NavFactory from "~/src/component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "~/src/common/";
import AuthCtrl from "~/src/auth/AuthCtrl";
import Footer from "~/src/component/footer/Footer";

import "./_SignIn.scss";
import "../_Page.scss";

const SignIn: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory navType={ENavType.SignIn} />
      <div className="page">
        <AuthCtrl />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
