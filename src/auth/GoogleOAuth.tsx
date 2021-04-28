import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import "./_Auth.scss";

const GoogleOAuth: React.FC<{}> = () => {
  const history = useHistory();

  const onLoginSuccess = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log(response);

      if ((response as GoogleLoginResponse) !== null) {
        const authRes = (response as GoogleLoginResponse).getAuthResponse();
        sessionStorage.setItem("userID", authRes.access_token);
        sessionStorage.setItem("expiresIn", `${authRes.expires_in}`);
      } else {
        const code = (response as GoogleLoginResponseOffline).code;
        console.log("trying to access offline: ", code);
      }
      history.push("/main");
    },
    [history]
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
