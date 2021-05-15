import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EMenuMode, ENavType } from "../../typings";
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
import {
  initFetch_QueryAllMyBookmarks,
  initFetch_QueryUser,
} from "~/src/store/action/user-async";
import { init } from "~/src/store/reducer/search-result/reducer";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  initCarouselImages(dispatch);
  initLectures(dispatch);
  initBookmarks(dispatch);
  initUser(dispatch);

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

const initCarouselImages = (dispatch: Dispatch<unknown>) => {
  const _initFetchRandomCarouselImages = useCallback(
    (query: string) => dispatch(initFetch_CarouselImageURLs({ query })),
    []
  );

  // TODO: Fetch Random Images times passing by
  useEffect(() => {
    _initFetchRandomCarouselImages("office");
  }, []);
};

const initLectures = (dispatch: Dispatch<unknown>) => {
  const _initFetchRetrieveLectures = useCallback(
    () => dispatch(initFetch_RetrieveLectures()),
    []
  );

  useEffect(() => {
    _initFetchRetrieveLectures();
  }, []);
};

const initBookmarks = (dispatch: Dispatch<unknown>) => {
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

const initUser = (dispatch: Dispatch<unknown>) => {
  const _queryUser = useCallback(
    (myUserID: string) => dispatch(initFetch_QueryUser(myUserID)),
    []
  );

  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (myUserID === "" || !myUserID) {
      return;
    }

    _queryUser(myUserID);
  }, []);
};

export default Main;
