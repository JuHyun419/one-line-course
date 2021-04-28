import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./_Auth.scss";

// type TKakaoOnSucceed = {
//   response: LoginResponse;
//   profile?: UserProfile;
// };

const KakaoOAuth: React.FC = () => {
  const history = useHistory();
  const loginWithKakao = useKakaoLoginCallback(history);

  return (
    <div id="custom-login-btn" className="authBtn" onClick={loginWithKakao}>
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="181"
      />
    </div>
  );
};

const useKakaoLoginCallback = (history: any) => {
  // const dispatch = useDispatch();
  // const _

  const loginWithKakao = () => {
    Kakao.Auth.login({
      success: onSuccess => {
        console.log(onSuccess);

        sessionStorage.setItem("userID", onSuccess.access_token);
        sessionStorage.setItem("expiresIn", `${onSuccess.expires_in}`);

        // request the current user's info
        requestCurrentUserInfo();
      },

      fail: onFail => {
        console.error(onFail);
      },
    });
  };

  const requestCurrentUserInfo = () =>
    Kakao.API.request({
      url: "/v2/user/me",

      success: onSuccess => {
        console.log(onSuccess);
        // TODO: store <id, KakaoAcount(email, nickname, profile_image_url, thumbnail_image_url ...)>
        // into sessionStorage
        
        history.push("/main");
      },

      fail: onFail => {
        console.error(onFail);
      },
    });

  return loginWithKakao;
};

export default KakaoOAuth;
