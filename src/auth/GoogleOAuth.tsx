import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import "./_Auth.scss";
import { useDispatch } from "react-redux";
import { initFetch_CreateUser } from "../store/action/user";
import { IUserData } from "../typings";

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
        sessionStorage.setItem("userID", access_token);
        sessionStorage.setItem("expiresIn", `${expires_in}`);

        // 2. post the user info into the db
        const profile = authResponse.getBasicProfile();
        if (!profile) {
          throw new Error("No profile is valid!");
        }

        const id = profile.getId();
        const email = profile.getEmail();
        const name = profile.getName();
        const imageURL = profile.getImageUrl();

        // TODO: Check the endpoint and test again
        // _createUser({
        //   userID: id,
        //   email,
        //   name,
        //   imageURL,
        //   platform: "google",
        // });
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
