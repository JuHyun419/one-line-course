import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import "./_Auth.scss";
import { useDispatch } from "react-redux";
import { initFetch_CreateUser } from "../store/action/user-async";
import { IUserData } from "../typings";
import {
  EXPIRES_IN_SESSION_STORAGE_KEY,
  PLATFORM_SESSION_STORAGE_KEY,
  USERID_SESSION_STORAGE_KEY,
} from "../common";

const GoogleOAuth: React.FC<{}> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const _createUser = useCallback(
    (data: IUserData) => dispatch(initFetch_CreateUser(data)),
    []
  );

  const onLoginSuccess = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log(response);

      if ((response as GoogleLoginResponse) !== null) {
        const authResponse = response as GoogleLoginResponse;
        if (!authResponse) {
          throw new Error("no valid auth response!");
        }

        // 1. store the authentication info
        const { access_token, expires_in } = authResponse.getAuthResponse();
        sessionStorage.setItem(USERID_SESSION_STORAGE_KEY, access_token);
        sessionStorage.setItem(EXPIRES_IN_SESSION_STORAGE_KEY, `${expires_in}`);
        sessionStorage.setItem(PLATFORM_SESSION_STORAGE_KEY, "google");

        // 2. post the user info into the db
        const profile = authResponse.getBasicProfile();
        if (!profile) {
          throw new Error("No profile is valid!");
        }

        // const id = profile.getId();
        const email = profile.getEmail();
        const name = profile.getName();
        const imageUrl = profile.getImageUrl();

        console.log("Google auth -> ", access_token, email, name, imageUrl);

        // TODO: Check the endpoint and test again
        _createUser({
          id: access_token,
          email,
          name,
          imageUrl,
          platform: "google",
        });
      } else {
        const code = (response as GoogleLoginResponseOffline).code;
        console.log("trying to access offline: ", code);
      }
      history.push("/main");
    },
    [history, _createUser]
  );

  const onLoginFail = useCallback((error: any): void => {
    console.log(error);
    localStorage.clear();
  }, []);

  return (
    <div className="authBtn">
      <GoogleLogin
        clientId={process.env.GOOGLE_OAUTH_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFail}
        cookiePolicy={"single_host_origin"}
        // theme={"dark"}
        // isSignedIn
      />
    </div>
  );
};

export default GoogleOAuth;
