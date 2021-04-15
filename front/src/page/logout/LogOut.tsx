import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const LogOut = () => {
  // TODO: Resource disposal (oAuth)
  return (
    <Fragment>
      <Redirect to="/" />
    </Fragment>
  );
};

export default LogOut;
