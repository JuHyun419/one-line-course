import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  setImageIndicatorCurIdx,
  setImgWidth,
} from "~/src/store/action/carousel";
import { clearSelectedAll } from "~/src/store/action/search";
import { closeSearchBar, setCurrentInput } from "~/src/store/action/search-bar";
import { clearSuggestion } from "~/src/store/action/search-suggestion";

const LogOut = () => {
  // TODO: Resource disposal (oAuth)
  sessionStorage.clear();

  // TODO: auth disposal of Google oAuth and Kakao oAuth (highly possible)!

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setImgWidth(0));
    dispatch(setImageIndicatorCurIdx(0));
    dispatch(clearSelectedAll());
    dispatch(setCurrentInput(""));
    dispatch(closeSearchBar());
    dispatch(clearSuggestion());
  }, []);
  return <Redirect to="/" />;
};

export default LogOut;
