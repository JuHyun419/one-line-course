import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import "./_Auth.scss";

const KakaoOAuth: React.FC<{}> = () => {
  // console.log(Kakao);
  const history = useHistory();

  const loginWithKakao = useCallback(() => {
    Kakao.Auth.login({
      success: authObj => {
        Kakao.API.request({
          url: "/v2/user/me",
          success: onSuccess => {
            console.log(onSuccess);
            history.push("/main");
          },
          always: onAlways => {
            // console.log(onAlways);
          },
        });
      },
      fail: onFail => {
        console.log(onFail);
      },
    });
  }, [history]);

  return (
    <div id="custom-login-btn" className="authBtn" onClick={loginWithKakao}>
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="181"
      />
    </div>
  );
};

export default KakaoOAuth;
