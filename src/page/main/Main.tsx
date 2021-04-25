import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { ENavType } from "../../typings";
// import { TCombinedStates } from "../../store";

import { initFetch_CarouselImageURLs } from "../../store/action/carousel-async/";

import NavFactory from "../../component/nav/nav-factory/NavFactory";

import ImageCarousel from "./image-carousel/ImageCarousel";
import Search from "./search/Search";
import KeywordSelectorCtrl from "./search/keyword-selector/KeywordSelectorCtrl";
import SearchResult from "./search-result/SearchResult";
import MainMenu from "./main-menu/MainMenu";
import { placeIconsRandomly } from "../../common/";
import Footer from "../../component/footer/Footer";

import "./_Main.scss";

const Main: React.FC<{}> = () => {
  useInitFetch();

  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
      <div className="page main">
        <ImageCarousel />
        <Search />
        <KeywordSelectorCtrl />
        <SearchResult />
        <MainMenu />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
        <Footer />
      </div>
    </div>
  );
};

const useInitFetch = () => {
  const dispatch = useDispatch();
  const _initFetchRandomCarouselImages = useCallback(
    // TODO: Fetch Random Images times passing by
    (query: string) => dispatch(initFetch_CarouselImageURLs({ query })),
    []
  );

  useEffect(() => {
    _initFetchRandomCarouselImages("office");
  }, []);
};

export default Main;
