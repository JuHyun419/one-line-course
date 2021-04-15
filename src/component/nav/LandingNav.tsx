import React from "react";
import { useHistory } from "react-router-dom";
import { useRedirectToOnButtonClick } from "../../hooks/useRedirectTo";

import Button from "../button/Button";
import { EButtonSize } from "../button/EButtonSize";
import { EButtonType } from "../button/EButtonType";
import NavProps from "./NavProps";

import "./_Nav.scss";

const toSignIn = "/signIn";

const LandingNav: React.FC<NavProps> = ({ children }) => {
  const history = useHistory();
  console.log(history);
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
