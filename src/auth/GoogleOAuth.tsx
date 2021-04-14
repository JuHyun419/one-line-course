import React, { useCallback } from "react";

import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

import "./_Auth.scss";

const GoogleOAuth = () => {
  const onLoginSuccess = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      console.log(response);
      // TODO: after login
    },
    []
  );

  const onLoginFail = useCallback((error: any): void => {
    console.log(error);
  }, []);

  return (
    <div className="authBtn">
      <GoogleLogin
        clientId={process.env.GOOGLE_OAUTH_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFail}
        cookiePolicy={"single_host_origin"}
        theme={"dark"}
        isSignedIn
      />
    </div>
  );
};

export default GoogleOAuth;
