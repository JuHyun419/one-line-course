// import React from "react";
import { Reducer } from "redux";
import {
  EMainCarouselImageFetchActions,
  MainCarouselImageFetchAction,
  MainCarouselImageFetchState,
  TMainCarouselImageFetchSucceed,
} from "../../typings/type";

const initState: MainCarouselImageFetchState = {
  images: new Array(1),
  imagesCount: 0,
  error: null,
  loading: false,
};

const MainCarouselImageFetchReducer: Reducer<
  MainCarouselImageFetchState,
  MainCarouselImageFetchAction
> = (
  state: MainCarouselImageFetchState = initState,
  action: MainCarouselImageFetchAction
): MainCarouselImageFetchState => {
  switch (action.type) {
    case EMainCarouselImageFetchActions.FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EMainCarouselImageFetchActions.FETCH_IMAGES_SUCCEED:
      const { urls, length } = action.payload as TMainCarouselImageFetchSucceed;
      return {
        images: urls,
        imagesCount: length,
        error: null,
        loading: false,
      };

    case EMainCarouselImageFetchActions.FETCH_IMAGES_FAIL:
      return {
        images: [],
        imagesCount: 0,
        error: action.payload as Error,
        loading: false,
      };

    default:
      return state;
  }
};

export default MainCarouselImageFetchReducer;
