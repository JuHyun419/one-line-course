import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ENavType } from "../../typings/type";
import { initFetch } from "../../store/action/carousel-async/";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "../../common/";
import Footer from "../../component/footer/Footer";
import ImageCarousel from "./Image-carousel/ImageCarousel";
import Search from "./Search/Search";

import "./_Main.scss";

const Main: React.FC<{}> = () => {
  useInitFetch();

  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
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

const useInitFetch = () => {
  const dispatch = useDispatch();

  const _initFetch = useCallback(
    (query: string) => dispatch(initFetch({ query })),
    [dispatch]
  );

  useEffect(() => {
    _initFetch("office");
  }, []);
};

export default Main;
