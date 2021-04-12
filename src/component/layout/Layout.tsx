import React from "react";
// import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import NavFactory from "../nav/nav-factory/NavFactory";
import { ENavType } from "../nav/ENavType";

import Footer from "../footer/Footer";

const Layout: React.FC<{ children?: JSX.Element | undefined | null }> = ({
  children,
}) => {
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
