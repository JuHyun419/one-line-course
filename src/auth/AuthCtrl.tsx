import React from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const responseGoogle = (
  response: GoogleLoginResponse | GoogleLoginResponseOffline
): void => {
  console.log(response);
};

const AuthCtrl: React.FC<{}> = () => {
  return (
    <GoogleLogin
      clientId="591960219137-tsudidmrbpip8j7bj1cchtllb1jik2sm.apps.googleusercontent.com"
      buttonText="Login"
      render={renderProps => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        ></button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default AuthCtrl;
