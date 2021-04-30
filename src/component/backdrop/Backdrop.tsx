import React, { Fragment } from "react";

import "./_Backdrop.scss";

interface IBackdropProps {
  isUsed: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<IBackdropProps> = ({ isUsed, onClose }) => (
  <Fragment>{isUsed ? <div className="backdrop" onClick={onClose}></div> : null}</Fragment>
);

export default Backdrop;
