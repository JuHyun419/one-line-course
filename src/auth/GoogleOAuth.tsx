import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initFetch_CreateUser } from "../store/action/user-async";
import { IUserData } from "../typings";
import {
  EXPIRES_IN_SESSION_STORAGE_KEY,
  PLATFORM_SESSION_STORAGE_KEY,
  USERID_SESSION_STORAGE_KEY,
} from "../common";

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import { useAuthContext } from "../context/AuthCtx";
import "./_Auth.scss";

const GoogleOAuth: React.FC = () => {
  const authCtx = useAuthContext();

  const history = useHistory();

  const dispatch = useDispatch();
  const _createUser = useCallback(
    (data: IUserData) => dispatch(initFetch_CreateUser(data)),
    []
  );

  const onLoginSuccess = useCallback(
    // 1. get response through by parameter
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      // console.log(response);

      if (!(response as GoogleLoginResponse)) {
        // const code = (response as GoogleLoginResponseOffline).code;
        // console.log("trying to access offline: ", code);
      }

      const authResponse = response as GoogleLoginResponse;

      // 2. post the user info into the db
      const profile = authResponse.getBasicProfile();
      const id = profile.getId();
      const email = profile.getEmail();
      const name = profile.getName();
      const imageUrl = profile.getImageUrl();

      console.log("Google auth -> ", id, email, name, imageUrl);

      // 3. create a user by POST to server
      _createUser({
        id,
        email,
        name,
        imageUrl,
        platform: "google",
      });

      // 3. store the authentication info
      const { access_token, expires_in } = authResponse.getAuthResponse();

      sessionStorage.setItem(USERID_SESSION_STORAGE_KEY, id);
      sessionStorage.setItem(
        EXPIRES_IN_SESSION_STORAGE_KEY,
        expires_in.toString()
      );
      sessionStorage.setItem(PLATFORM_SESSION_STORAGE_KEY, "google");

      // 4. authenticate in context
      authCtx.authenticate();

      // 5. redirect to main page
      history.push("/");
    },
    []
  );

  const onLoginFail = useCallback((error: any) => {
    console.log(error);
    localStorage.clear();
  }, []);

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_OAUTH_CLIENT_ID}
      buttonText="Sign in with Google"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFail}
      cookiePolicy={"single_host_origin"}
      className="authBtn-google"
      // theme={"dark"}
      // isSignedIn
    />
  );
};

export default GoogleOAuth;
