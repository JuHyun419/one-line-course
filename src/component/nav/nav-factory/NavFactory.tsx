import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { ENavType } from "~/src/typings";
import { TCombinedStates } from "~/src/store";
import { AfterLoginNav, LandingNav, SignInNav } from "../";

import "./_NavFactory.scss";

interface INavFactoryProps {
  navType: ENavType;
  // TODO: Decorator -> @range(0, 4)
  highlightBtnIdx?: number;
}

const NavFactory: React.FC<INavFactoryProps> = (props: INavFactoryProps) => (
  <Fragment>{makeNav(props)}</Fragment>
);

const makeNav = ({
  navType,
  highlightBtnIdx,
}: INavFactoryProps): JSX.Element => {
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
      const imgRef = useSelector(
        (state: TCombinedStates) => state.carousel.ref
      );

      const listener = useCallback(() => {
        if (!imgRef?.current) return;

        setSticky(
          window.scrollY <= imgRef.current!.getBoundingClientRect().bottom
            ? "navFactory"
            : "navFactory sticky"
        );
      }, [window, imgRef]);

      useEffect(() => {
        if (!imgRef) return;

        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
      }, [window, imgRef, listener]);
      break;

    default:
      throw new Error("Can't react at here!");
  }

  return <div className={sticky}>{navJSX}</div>;
};

export default NavFactory;
