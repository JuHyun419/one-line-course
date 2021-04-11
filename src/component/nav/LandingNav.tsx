import React from "react";

import Button from "../button/Button";
import { EButtonSize } from "../button/EButtonSize";
import { EButtonType } from "../button/EButtonType";

import "./_Nav.scss";

const LandingNav: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  // TODO: link onClick with Router -> redirect to /signIn
  const redirectToSignInPage = () => {};

  return (
    <div className="nav-landing">
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Alt}
        onClick={redirectToSignInPage}
      >
        Sign In
      </Button>
      {children}
    </div>
  );
};

export default LandingNav;
