import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EMenuMode, ENavType } from "../../typings";
import { initFetch_CarouselImageURLs } from "../../store/action/carousel-async/";
import { initFetch_RetrieveLectures } from "../../store/action/search-async";

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

const Main: React.FC = () => {
  initCarouselImages();
  initLectures();

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

const initCarouselImages = () => {
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

const initLectures = () => {
  const dispatch = useDispatch();
  const _initFetch = useCallback(
    () => dispatch(initFetch_RetrieveLectures()),
    []
  );

  useEffect(() => {
    _initFetch();
  }, []);
};

export default Main;
