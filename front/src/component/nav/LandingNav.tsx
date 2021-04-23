import React from "react";
import { useHistory } from "react-router-dom";
import { EButtonSize, EButtonType } from "../../typings/type";
import { useRedirectToOnButtonClick } from "../../hooks/useRedirectTo";

import Button from "../button/Button";

import "./_Nav.scss";

const toSignIn = "/signIn";

interface NavProps {
  // TODO: decorator -> @range(0, 4)
  highlightBtnIdx?: number;
  children?: JSX.Element;
}

const LandingNav: React.FC<NavProps> = ({ children }) => {
  const history = useHistory();
  const redirectToSignIn = useRedirectToOnButtonClick(history, toSignIn);

  return (
    <div className="nav-landing">
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight
        onClick={redirectToSignIn}
      >
        가입
      </Button>
      {children}
    </div>
  );
};

export default LandingNav;
