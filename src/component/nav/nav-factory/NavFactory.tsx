import React, { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ENavType,
  TCombinedStates,
  CarouselState,
} from "../../../typings/type";

import AfterLoginNav from "../AfterLoginNav";
import LandingNav from "../LandingNav";
import SignInNav from "../SignInNav";

import "./_NavFactory.scss";

interface NavFactoryProps {
  navType: ENavType;
  // TODO: Decorator -> @range(0, 4)
  highlightBtnIdx?: number;
}

const NavFactory: React.FC<NavFactoryProps> = (props: NavFactoryProps) => (
  <Fragment>{makeNav(props)}</Fragment>
);

const makeNav = ({
  navType,
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
      const imagePlacerRef = useSelector(
        (state: TCombinedStates) => state.carousel.carouselRef
      );
      useEffect(() => {
        if (!imagePlacerRef?.current) return;

        window.addEventListener("scroll", function () {
          if (!imagePlacerRef?.current) return;

          setSticky(
            window.scrollY <=
              imagePlacerRef.current!.getBoundingClientRect().top
              ? "navFactory"
              : "navFactory sticky"
          );
        });
      }, [window, imagePlacerRef]);
      break;

    default:
      throw new Error("Can't react at here!");
  }

  return <div className={sticky}>{navJSX}</div>;
};

export default NavFactory;
