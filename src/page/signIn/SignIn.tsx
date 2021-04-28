import React from "react";
import { EMenuMode, ENavType } from "~/src/typings";
import NavFactory from "~/src/component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "~/src/common/";
import AuthCtrl from "~/src/auth/AuthCtrl";
import Footer from "~/src/component/footer/Footer";

import "./_SignIn.scss";
import "../_Page.scss";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";

const SignIn: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory navType={ENavType.SignIn} />
      <div className="page">
        <AuthCtrl />
        <GoToTop />
        <Menu menuMode={EMenuMode.BeforeLogin} />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
