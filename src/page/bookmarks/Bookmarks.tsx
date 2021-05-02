import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EMenuMode, ENavType } from "../../typings";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import BookmarksHistory from "./BookmarksHistory";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
import { placeIconsRandomly, USERID_SESSION_STORAGE_KEY } from "../../common/";
import { initFetch_QueryAllMyBookmarks } from "~/src/store/action/user-async";

import "./_Bookmarks.scss";

const Bookmarks = () => {
  // initBookmarksHistory();
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

const initBookmarksHistory = () => {
  const dispatch = useDispatch();
  const _queryAllMyBookmarks = useCallback(
    (myUserID: string) => dispatch(initFetch_QueryAllMyBookmarks(myUserID)),
    []
  );

  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    if (!myUserID || myUserID === "undefined") {
      return;
    }

    _queryAllMyBookmarks(myUserID);
  }, []);
};

export default Bookmarks;
