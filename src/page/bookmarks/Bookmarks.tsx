import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
import { initFetch_RetrieveLectures } from "~/src/store/action/search-async";

import { initFetch_QueryAllMyBookmarks } from "~/src/store/action/user-async";
import { placeIconsRandomly, USERID_SESSION_STORAGE_KEY } from "../../common/";

import NavFactory from "../../component/nav/nav-factory/NavFactory";

import { EMenuMode, ENavType } from "../../typings";

import "./_Bookmarks.scss";
import BookmarksHistory from "./BookmarksHistory";

const Bookmarks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY);
    dispatch(initFetch_QueryAllMyBookmarks(myUserID!));
    dispatch(initFetch_RetrieveLectures());
  }, []);

  return (
    <div>
      <NavFactory navType={ENavType.Main} highlightBtnIdx={2}/>
      <div className="page bookmarks">
        <BookmarksHistory/>
        <GoToTop/>
        <Menu menuMode={EMenuMode.Others}/>
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
    </div>
  );
};

export default Bookmarks;
