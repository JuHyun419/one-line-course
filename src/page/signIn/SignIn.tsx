import React from "react";

import { NavFactory, ENavType } from "../../component/nav/";
import { placeIconsRandomly } from "../../common/";
import AuthCtrl from "../../auth/AuthCtrl";
import Footer from "../../component/footer/Footer";

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
