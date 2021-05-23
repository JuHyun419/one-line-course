import React from "react";

import { TFooterDevCardData, FooterDevCardData } from "./FooterDevCardData";

import { getIcon } from "../../../common";

import "../_Footer.scss";

const FooterDevCard: React.FC = () => {
  const devCardsJSX = FooterDevCardData.map((data: TFooterDevCardData) => {
    const { name, portrait, position, gitHubRepoLink } = data;
    return (
      <div key={name} className="footer-dev-card">
        <div className="left">
          {getIcon(portrait, undefined, { fontSize: "2.3rem" })}
          <h2>{name}</h2>
        </div>
        <div className="right">
          <p>{position}</p>
          {/* TODO: Link to real repo */}
          <p>{gitHubRepoLink}</p>
        </div>
      </div>
    );
  });

  return <div className="footer-dev-cards">{devCardsJSX}</div>;
};

export default FooterDevCard;
