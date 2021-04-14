import React, { Fragment } from "react";

import { ENavType } from "../ENavType";
import AfterLoginNav from "../AfterLoginNav";
import LandingNav from "../LandingNav";
import SignInNav from "../SignInNav";
import NavFactoryProps from "./NavFactoryProps";

const NavFactory: React.FC<NavFactoryProps> = (props: NavFactoryProps) => (
  <Fragment>{makeNav(props)}</Fragment>
);

const makeNav = ({
  navType,
  history,
  highlightBtnIdx,
}: NavFactoryProps): JSX.Element => {
  let navJSX: JSX.Element;
  switch (navType) {
    case ENavType.Landing:
      navJSX = <LandingNav history={history} />;
      break;

    case ENavType.SignIn:
      navJSX = <SignInNav history={history} />;
      break;

    case ENavType.AfterLogin:
      navJSX = (
        <AfterLoginNav history={history} highlightBtnIdx={highlightBtnIdx} />
      );
      break;

    default:
      throw new Error("Can't react at here!");
  }
  return navJSX;
};

export default NavFactory;
