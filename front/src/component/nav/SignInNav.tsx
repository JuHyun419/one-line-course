import React from "react";

import "./_Nav.scss";

const SignInNav: React.FC<NavProps> = ({ children }) => {
  return <div className="nav-signIn">{children}</div>;
};

export default SignInNav;
