import React, { Dispatch, useCallback, useEffect } from "react";
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
  const dispatch = useDispatch();

  initBookmarks(dispatch);
  initLectures(dispatch);

  return (
    <div>
      <NavFactory navType={ENavType.Main} highlightBtnIdx={2} />
      <div className="page bookmarks">
        <BookmarksHistory />
        <GoToTop />
        <Menu menuMode={EMenuMode.Others} />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
    </div>
  );
};

const initBookmarks = (dispatch: Dispatch<unknown>) =>
  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    dispatch(initFetch_QueryAllMyBookmarks(myUserID!));
  }, []);

const initLectures = (dispatch: Dispatch<unknown>) =>
  useEffect(() => dispatch(initFetch_RetrieveLectures()), []);

export default Bookmarks;
