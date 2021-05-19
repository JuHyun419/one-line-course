import React from "react";
import { AuthCtxProvider } from "../context/AuthCtx";

import GoogleOAuth from "./GoogleOAuth";
import KakaoOAuth from "./KakaoOAuth";

import "./_Auth.scss";

const AuthCtrl: React.FC<{}> = () => {
  return (
    <div className="authCtrl">
      <GoogleOAuth />
      <KakaoOAuth />
    </div>
  );
};

export default AuthCtrl;
