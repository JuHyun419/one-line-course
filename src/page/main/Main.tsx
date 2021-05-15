import React, { Dispatch, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EMenuMode, ENavType } from "../../typings";
import { initFetch_CarouselImageURLs } from "../../store/action/carousel-async/";
import { initFetch_RetrieveLectures } from "../../store/action/search-async";

import NavFactory from "../../component/nav/nav-factory/NavFactory";

import Carousel from "./carousel/Carousel";
import Search from "./search/Search";
import KeywordSelectorCtrl from "./search/keyword-selector/KeywordSelectorCtrl";
import SearchResultSummary from "./search-result/SearchResultSummary";
import SearchResult from "./search-result/SearchResult";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
import { placeIconsRandomly, USERID_SESSION_STORAGE_KEY } from "../../common/";
import Footer from "../../component/footer/Footer";
import { initFetch_QueryAllMyBookmarks } from "~/src/store/action/user-async";

import "./_Main.scss";

const Main: React.FC = () => {
  initCarouselImages();
  initLectures();
  initBookmarks();

  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
      <div className="page main">
        <Carousel />
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
  const _initFetchRetrieveLectures = useCallback(
    () => dispatch(initFetch_RetrieveLectures()),
    []
  );

  useEffect(() => {
    _initFetchRetrieveLectures();
  }, []);
};

const initBookmarks = () => {
  const dispatch = useDispatch();
  const _queryAllMyBookmarks = useCallback(
    (myUserID: string) => dispatch(initFetch_QueryAllMyBookmarks(myUserID)),
    []
  );

  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (myUserID === "" || !myUserID) {
      return;
    }

    _queryAllMyBookmarks(myUserID);
  }, []);
};

export default Main;
