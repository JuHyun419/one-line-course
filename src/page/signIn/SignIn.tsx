import React from "react";
import { placeIconsRandomly } from "../../common/Icons";

import { ENavType } from "../../component/nav/ENavType";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import "./_SignIn.scss";

const SignIn: React.FC<{}> = () => {
  return (
    <div className={["page", "signIn"].join(" ")}>
      <NavFactory navType={ENavType.SignIn} />
      Sign In !!
      {placeIconsRandomly(30, { fontSize: "2rem" })}
    </div>
  );
};

export default SignIn;
