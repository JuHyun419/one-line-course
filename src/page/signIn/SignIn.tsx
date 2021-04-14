import React from "react";
import AuthCtrl from "../../auth/AuthCtrl";
import { placeIconsRandomly } from "../../common/Icons";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import "./_SignIn.scss";

const SignIn: React.FC<{}> = () => {
  return (
    <div className="page signIn">
      <NavFactory navType={ENavType.SignIn} />
      <AuthCtrl />
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default SignIn;
