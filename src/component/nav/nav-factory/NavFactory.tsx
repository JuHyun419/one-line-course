import React, { useState, Fragment, useEffect } from "react";

import { ENavType } from "../ENavType";
import AfterLoginNav from "../AfterLoginNav";
import LandingNav from "../LandingNav";
import SignInNav from "../SignInNav";
import NavFactoryProps from "./NavFactoryProps";

import "./_NavFactory.scss";

const NavFactory: React.FC<NavFactoryProps> = (props: NavFactoryProps) => (
  <Fragment>{makeNav(props)}</Fragment>
);

const makeNav = ({
  navType,
  carouselRef,
  highlightBtnIdx,
}: NavFactoryProps): JSX.Element => {
  const [sticky, setSticky] = useState("navFactory");
  let navJSX: JSX.Element;
  switch (navType) {
    case ENavType.Landing:
      navJSX = <LandingNav />;
      break;

    case ENavType.SignIn:
      navJSX = <SignInNav />;
      break;

    case ENavType.AfterLogin:
      navJSX = <AfterLoginNav highlightBtnIdx={highlightBtnIdx} />;
      useEffect(() => {
        window.addEventListener("scroll", function () {
          // console.log(window.scrollY);
          // console.log(carouselRef!.current!.getBoundingClientRect().top);

          setSticky(
            window.scrollY <= carouselRef!.current!.getBoundingClientRect().top
              ? "navFactory"
              : "navFactory sticky"
          );
        });
      }, [window]);
      break;

    default:
      throw new Error("Can't react at here!");
  }

  return <div className={sticky}>{navJSX}</div>;
};

export default NavFactory;
