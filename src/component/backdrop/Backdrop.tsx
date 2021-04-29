import React, { Fragment } from "react";

import "./_Backdrop.scss";

interface IBackdropProps {
  isUsed: boolean;
}

const Backdrop: React.FC<IBackdropProps> = ({ isUsed }) => (
  <Fragment>{isUsed ? <div className="backdrop"></div> : null}</Fragment>
);

export default Backdrop;
