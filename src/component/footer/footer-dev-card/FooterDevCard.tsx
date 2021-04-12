import React, { Fragment } from "react";

import Data from "./FooterDevCardData";

import "../_Footer.scss";
import { getIcon } from "~common/Icons";

const FooterDevCard = () => {
  return (
    <div className="footer-dev-card">
      {Data.map(d => (
        <Fragment key={d.name}>
          <h2>{d.name}</h2>
          {/* <img src={d.portrait} alt="portrait photo" /> */}
          {getIcon("User")}
          <p>{d.position}</p>
          <p>{d.gitHubRepoLink}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default FooterDevCard;
