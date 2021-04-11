import React, { Fragment } from "react";

import ENavType from "../ENavType";
import AfterLoginNav from "../AfterLoginNav";
import LandingNav from "../LandingNav";
import SignInNav from "../SignInNav";

interface NavFactoryProps {
  navType: ENavType;
}

const NavFactory = ({ navType }: NavFactoryProps): JSX.Element | undefined => {
  let nav: JSX.Element;

  switch (navType) {
    case ENavType.Landing:
      nav = <LandingNav />;
      break;

    case ENavType.SignIn:
      nav = <SignInNav />;
      break;

    case ENavType.AfterLogin:
      nav = <AfterLoginNav />;
      break;

    default:
      throw new Error("Can't react at here!");
  }
  return <div className="nav">{nav}</div>;
};

export default NavFactory;
