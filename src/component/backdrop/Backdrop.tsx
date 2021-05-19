import React from "react";

import "./_Backdrop.scss";

interface IBackdropProps {
  isUsed: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<IBackdropProps> = ({ isUsed, onClose }) => (
  <>{isUsed ? <div className="backdrop" onClick={onClose}></div> : null}</>
);

export default Backdrop;
