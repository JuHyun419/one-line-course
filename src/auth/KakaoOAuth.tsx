import React from "react";
import { EButtonType } from "../component/button/EButtonType";
import Button from "../component/button/Button";
const { Kakao } = window;

import "./_Auth.scss";

const KakaoOAuth: React.FC<{}> = () => {
  console.log(Kakao);

  const loginWithKakao = () => {
    Kakao.Auth.login({
      success: authObj => {
        console.log(authObj);
        Kakao.API.request({
          url: "/v2/user/me",
          success: onSuccess => {
            console.log(onSuccess);
          },
          always: onAlways => {
            console.log(onAlways);
          },
        });
      },
      fail: err => {
        console.log(err);
      },
    });
  };

  return (
    <div className="authBtn" onClick={loginWithKakao}>
      {/* <Button btnType={EButtonType.Alt} /> */}
      <a id="custom-login-btn">
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
        />
      </a>
    </div>
  );
};

export default KakaoOAuth;
