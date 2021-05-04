import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  EXPIRES_IN_SESSION_STORAGE_KEY,
  PLATFORM_SESSION_STORAGE_KEY,
  USERID_SESSION_STORAGE_KEY,
} from "../common";

import { initFetch_CreateUser } from "../store/action/user-async";
import { IUserData } from "../typings";

import "./_Auth.scss";

// type TKakaoOnSucceed = {
//   response: LoginResponse;
//   profile?: UserProfÎile;
// };

const KakaoOAuth: React.FC = () => {
  const loginWithKakao = useKakaoLoginCallback();

  return (
    <div
      id="custom-login-btn"
      className="authBtn-kakao"
      onClick={loginWithKakao}
    >
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        alt="kakao login button"
      />
    </div>
  );
};

const useKakaoLoginCallback = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const _createUser = useCallback(
    (data: IUserData) => dispatch(initFetch_CreateUser(data)),
    []
  );

  const loginWithKakao = useCallback(
    () =>
      Kakao.Auth.login({
        success: onSuccess => {
          // console.log(onSuccess);

          // store the auth info
          const { access_token, expires_in } = onSuccess;

          sessionStorage.setItem(
            EXPIRES_IN_SESSION_STORAGE_KEY,
            expires_in.toString()
          );
          sessionStorage.setItem(PLATFORM_SESSION_STORAGE_KEY, "kakao");

          // request the current user's info
          requestCurrentUserInfo(access_token);
        },

        fail: onFail => {
          console.error(onFail);
        },
      }),
    []
  );

  const requestCurrentUserInfo = useCallback(
    (access_token: string) =>
      Kakao.API.request({
        url: "/v2/user/me",

        success: onSuccess => {
          // console.log(onSuccess);

          const id = onSuccess.id;
          const { email, profile } = onSuccess.kakao_account;
          const { nickname, profile_image_url } = profile!;

          console.log("Kakao auth -> ", id, email, nickname, profile_image_url);

          sessionStorage.setItem(USERID_SESSION_STORAGE_KEY, id.toString());

          _createUser({
            id: id.toString(),
            email: email!,
            name: nickname!,
            imageUrl: profile_image_url!,
            platform: "kakao",
          });
          history.push("/main");
        },

        fail: onFail => {
          // console.error(onFail);
        },
      }),
    [_createUser]
  );

  return loginWithKakao;
};

export default KakaoOAuth;
