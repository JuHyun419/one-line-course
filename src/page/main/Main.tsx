import React, { useRef } from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import { placeIconsRandomly } from "../../common/Icons";
import Footer from "../../component/footer/Footer";
import ImageCarousel from "./Image-carousel/ImageCarousel";
import Search from "./Search/Search";

import "./_Main.scss";

const Main: React.FC<{}> = () => {
  const imagePlacerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <NavFactory
        navType={ENavType.AfterLogin}
        highlightBtnIdx={0}
        imagePlacerRef={imagePlacerRef}
      />
      <div className="page main">
        <ImageCarousel imagePlacerRef={imagePlacerRef} />
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
