import React from "react";
import useRedirectToOnButtonClick from "../../hooks/useRedirectTo";

import Button from "../button/Button";
import { EButtonSize } from "../button/EButtonSize";
import { EButtonType } from "../button/EButtonType";
import NavProps from "./NavProps";

import "./_Nav.scss";

const toSignIn = "/signIn";

const LandingNav: React.FC<NavProps> = ({ history, children }) => {
  const redirectToSignIn = useRedirectToOnButtonClick(history, toSignIn);

  return (
    <div className="nav-landing">
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight
        onClick={redirectToSignIn}
      >
        Sign In
      </Button>
      {children}
    </div>
  );
};

export default LandingNav;
