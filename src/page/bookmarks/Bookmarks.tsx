import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EMenuMode, ENavType } from "../../typings";

import { initFetch_QueryAllMyBookmarks } from "~/src/store/action/user-async";
import { initFetch_RetrieveLectures } from "~/src/store/action/search-async";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import BookmarksHistory from "./BookmarksHistory";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
import { placeIconsRandomly, USERID_SESSION_STORAGE_KEY } from "../../common/";

import "./_Bookmarks.scss";

const Bookmarks = () => {
  initBookmarks();
  initLectures();
  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={2} />
      <div className="page bookmarks">
        <BookmarksHistory />
        <GoToTop />
        <Menu menuMode={EMenuMode.BeforeLogin} />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
    </div>
  );
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

export default Bookmarks;
