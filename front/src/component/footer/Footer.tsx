import React from "react";

import FooterDevCard from "./footer-dev-card/FooterDevCard";
import "./_Footer.scss";

const Footer: React.FC<{}> = () => {
  return (
    <div className="footer">
      <FooterDevCard />
    </div>
  );
};

export default Footer;
