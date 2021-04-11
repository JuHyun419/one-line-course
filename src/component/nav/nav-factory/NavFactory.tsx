import React from "react";

import ENavType from "../ENavType";

const NavFactory: React.FC<{ navType: ENavType }> = ({ navType }) => {
  switch (navType) {
    case ENavType.Landing:
      return;

    case ENavType.SignIn:
      return;

    case ENavType.AfterLogin:
      return;

    default:
      throw new Error("Can't react at here!");
  }
};

export default NavFactory;
