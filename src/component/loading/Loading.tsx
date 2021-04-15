import React from "react";

import "./_Loading.scss";

const Loading: React.FC<{ duration?: number }> = ({ duration }) => {
  return (
    <div className="roller-placer">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
