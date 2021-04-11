import React from "react";

import { ENavType } from "../ENavType";
import AfterLoginNav from "../AfterLoginNav";
import LandingNav from "../LandingNav";
import SignInNav from "../SignInNav";

interface NavFactoryProps {
  navType: ENavType;
}

const NavFactory: React.FC<NavFactoryProps> = ({
  navType,
}: NavFactoryProps) => <div className="nav">{makeNav(navType)}</div>;

const makeNav = (navType: ENavType) => {
  let navJSX: JSX.Element;
  switch (navType) {
    case ENavType.Landing:
      navJSX = <LandingNav />;
      break;

    case ENavType.SignIn:
      navJSX = <SignInNav />;
      break;

    case ENavType.AfterLogin:
      navJSX = <AfterLoginNav />;
      break;

    default:
      throw new Error("Can't react at here!");
  }
  return navJSX;
};

export default NavFactory;
