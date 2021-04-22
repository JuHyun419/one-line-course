import React from "react";

import "./_Loading.scss";

interface LoadingProps {
  duration?: number;
}

const Loading: React.FC<LoadingProps> = ({ duration }) => {
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
