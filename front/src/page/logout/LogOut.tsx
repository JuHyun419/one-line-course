import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useAuthContext } from "~/src/context/AuthCtx";
import {
  setImageIndicatorCurIdx,
  setImgWidth,
} from "~/src/store/action/carousel";
import { clearSelectedAll } from "~/src/store/action/search";
import { closeSearchBar, setCurrentInput } from "~/src/store/action/search-bar";
import { clearSearch } from "~/src/store/action/search-result";
import { clearSuggestion } from "~/src/store/action/search-suggestion";

const LogOut = () => {
  const authCtx = useAuthContext();
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: Resource disposal (oAuth)
    sessionStorage.clear();

    // TODO: auth disposal of Google oAuth and Kakao oAuth (highly possible)!
    authCtx?.authenticate();

    dispatch(setImgWidth(0));
    dispatch(setImageIndicatorCurIdx(0));
    dispatch(clearSelectedAll());
    dispatch(setCurrentInput(""));
    dispatch(clearSelectedAll());
    dispatch(clearSearch());
    dispatch(closeSearchBar());
    dispatch(clearSuggestion());
  }, []);
  return <Redirect to="/" />;
};

export default LogOut;
