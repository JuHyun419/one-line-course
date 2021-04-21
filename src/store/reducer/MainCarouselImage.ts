import React from "react";
import { Reducer } from "redux";
import {
  EMainCarouselImageActions,
  MainCarouselImageAction,
  MainCarouselImageState,
} from "../../typings/type";

const initState: MainCarouselImageState = {
  imagesPlacerRef: null,
  currentImagesPlacerIndex: 0,
};

const MainCarouselImageReducer: Reducer<
  MainCarouselImageState,
  MainCarouselImageAction
> = (
  state: MainCarouselImageState = initState,
  action: MainCarouselImageAction
): MainCarouselImageState => {
  switch (action.type) {
    case EMainCarouselImageActions.UPDATE_IMAGES_PLACER_REF:
      return {
        ...state,
        imagesPlacerRef: action.payload as React.RefObject<HTMLDivElement>,
      };

    case EMainCarouselImageActions.UPDATE_CURRENT_IMAGES_PLACER_INDEX:
      return {
        ...state,
        currentImagesPlacerIndex: action.payload as number,
      };

    default:
      return state;
  }
};

export default MainCarouselImageReducer;
