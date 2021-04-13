import React from "react";

import "./_LandingInfoItem.scss";

const LandingInfoItem: React.FC<{
  children?: JSX.Element | Array<JSX.Element>;
}> = ({ children }) => <div className="landing-info-item">{children}</div>;

export default LandingInfoItem;
