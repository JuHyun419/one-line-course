import React, { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { ENavType } from "../../../typings/type";

import { CombinedCarousel } from "../../../store";
=======
import {
  ENavType,
  TCombinedStates,
  CarouselState,
} from "../../../typings/type";
>>>>>>> #21-메인페이지-add-redux

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
<<<<<<< HEAD
      const imgRef = useSelector(
        (state: CombinedCarousel) => state.carousel.ref
      );

      useEffect(() => {
        if (!imgRef) return;

        window.addEventListener("scroll", function () {
          if (!imgRef?.current) return;

          setSticky(
            window.scrollY <= imgRef.current!.getBoundingClientRect().top
=======
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
>>>>>>> #21-메인페이지-add-redux
              ? "navFactory"
              : "navFactory sticky"
          );
        });
<<<<<<< HEAD
      }, [window, imgRef]);
=======
      }, [window, imagePlacerRef]);
>>>>>>> #21-메인페이지-add-redux
      break;

    default:
      throw new Error("Can't react at here!");
  }

  return <div className={sticky}>{navJSX}</div>;
};

export default NavFactory;
