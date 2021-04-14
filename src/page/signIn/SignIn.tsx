import React from "react";
import AuthCtrl from "../../auth/AuthCtrl";
import { placeIconsRandomly } from "../../common/Icons";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import Footer from "../../component/footer/Footer";
import "./_SignIn.scss";

const SignIn: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory navType={ENavType.SignIn} />
      <div className="signIn-main">
        <AuthCtrl />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
