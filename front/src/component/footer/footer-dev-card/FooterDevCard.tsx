import React from "react";

import { TFooterDevCardData, FooterDevCardData } from "./FooterDevCardData";

import { getIcon } from "../../../common";
import "../_Footer.scss";


const FooterDevCard: React.FC<{}> = () => {
  const devCardsJSX: Array<JSX.Element> = FooterDevCardData.map(
    (d: TFooterDevCardData) => (
      <div className="footer-dev-card" key={d.name}>
        <div className="left">
          {/* <img src={d.portrait} alt="portrait photo" /> */}
          {getIcon(d.portrait, undefined, { fontSize: "2.3rem" })}
          <h2>{d.name}</h2>
        </div>
        <div className="right">
          <p>{d.position}</p>
          {/* TODO: Link to real repo */}
          <p>{d.gitHubRepoLink}</p>
        </div>
      </div>
    )
  );
  return <div className="footer-dev-cards">{devCardsJSX}</div>;
};

export default FooterDevCard;
