import React from "react";

import "./_Nav.scss";

interface NavProps {
  // TODO: decorator -> @range(0, 4)
  highlightBtnIdx?: number;
  children?: JSX.Element;
}

const SignInNav: React.FC<NavProps> = ({ children }) => {
  return <div className="nav-signIn">{children}</div>;
};

export default SignInNav;
