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

import {
  initFetch_QueryAllMyBookmarks,
  initFetch_QueryUser,
} from "~/src/store/action/user-async";
import { useDarkModeContext } from "~/src/context/DarkModeCtx";
import { ViewModeCtxProvider } from "~/src/context/ViewModeCtx";
import { AuthCtxProvider } from "~/src/context/AuthCtx";

import "./_Main.scss";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  initCarouselImages(dispatch);
  initLectures(dispatch);
  initBookmarks(dispatch);
  initUser(dispatch);

  const darkModeCtx = useDarkModeContext();

  return (
    <ViewModeCtxProvider>
      <div>
        <NavFactory navType={ENavType.Main} highlightBtnIdx={0} />
        <div
          className={["page", "main", darkModeCtx.isDark ? "dark" : ""]
            .join(" ")
            .trim()}
        >
          <Carousel />
          <Search />
          <KeywordSelectorCtrl />
          <SearchResultSummary />
          <SearchResult />
          <GoToTop />
          <Menu menuMode={EMenuMode.Main} />
          {placeIconsRandomly(30, { fontSize: "2rem" })}
          <Footer />
        </div>
      </div>
    </ViewModeCtxProvider>
  );
};

// TODO: Fetch Random Images times passing by
const initCarouselImages = (dispatch: Dispatch<unknown>) =>
  useEffect(() => dispatch(initFetch_CarouselImageURLs({ query: "dev" })), []);

const initLectures = (dispatch: Dispatch<unknown>) =>
  useEffect(() => dispatch(initFetch_RetrieveLectures()), []);

const initBookmarks = (dispatch: Dispatch<unknown>) =>
  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (myUserID === "" || !myUserID) {
      return;
    }

    dispatch(initFetch_QueryAllMyBookmarks(myUserID));
  }, []);

const initUser = (dispatch: Dispatch<unknown>) =>
  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (myUserID === "" || !myUserID) {
      return;
    }

    dispatch(initFetch_QueryUser(myUserID));
  }, []);

export default Main;
