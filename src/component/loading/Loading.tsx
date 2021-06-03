import React from "react";

import "./_Loading.scss";

interface ILoadingProps {
  // duration?: number;
}

const Loading: React.FC<ILoadingProps> = () => (
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

export default Loading;
