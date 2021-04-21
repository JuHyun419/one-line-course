import React, { useRef } from "react";
import { ENavType } from "../../typings/type";
import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "../../common/";
import Footer from "../../component/footer/Footer";
import ImageCarousel from "./Image-carousel/ImageCarousel";
import Search from "./Search/Search";

import "./_Main.scss";

const Main: React.FC<{}> = () => {
  return (
    <div>
      <NavFactory
        navType={ENavType.AfterLogin}
        highlightBtnIdx={0}
        // imagePlacerRef={imagePlacerRef}
      />
      <div className="page main">
        <ImageCarousel />
        <Search />
        {/* TODO: Keyword Selection */}
        {/* TODO: Search Result */}
        {placeIconsRandomly(30, { fontSize: "2rem" })}
        <Footer />
      </div>
    </div>
  );
};

export default Main;
