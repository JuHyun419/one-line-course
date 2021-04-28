import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EMenuMode, ENavType } from "../../typings";
// import { TCombinedStates } from "../../store";

import { initFetch_CarouselImageURLs } from "../../store/action/carousel-async/";

import NavFactory from "../../component/nav/nav-factory/NavFactory";

import ImageCarousel from "./image-carousel/ImageCarousel";
import Search from "./search/Search";
import KeywordSelectorCtrl from "./search/keyword-selector/KeywordSelectorCtrl";
import SearchResultSummary from "./search-result/SearchResultSummary";
import SearchResult from "./search-result/SearchResult";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
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
        <SearchResultSummary />
        <SearchResult />
        <GoToTop />
        <Menu menuMode={EMenuMode.AfterLogin} />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
        <Footer />
      </div>
    </div>
  );
};

const useInitFetch = () => {
  const dispatch = useDispatch();
  const _initFetchRandomCarouselImages = useCallback(
    (query: string) => dispatch(initFetch_CarouselImageURLs({ query })),
    []
  );

  // TODO: Fetch Random Images times passing by
  useEffect(() => {
    _initFetchRandomCarouselImages("office");
  }, []);
};

export default Main;
