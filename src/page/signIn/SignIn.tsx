import React from "react";
import { EMenuMode, ENavType } from "~/src/typings";

import NavFactory from "~/src/component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "~/src/common/";
import AuthCtrl from "~/src/auth/AuthCtrl";
import Menu from "~/src/component/menu/Menu";
import Footer from "~/src/component/footer/Footer";

import "../_Page.scss";

const SignIn: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory navType={ENavType.SignIn} />
      <div className="page">
        <AuthCtrl />
        <Menu menuMode={EMenuMode.Others} />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
