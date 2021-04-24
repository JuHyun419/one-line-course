import { TActions as TCarouselAsyncActions } from "../../action/carousel-async";

import { ECarouselAsyncActionType } from "../../../typings/type";
export interface ICarouselAsync {
  urls?: Array<string>;
  err?: string;
  isLoading: boolean;
}

export interface IState {
  fetcher: ICarouselAsync;
}

const init: ICarouselAsync = {
  urls: [],
  err: "",
  isLoading: false,
};

const reducer = (
  state: ICarouselAsync = init,
  action: TCarouselAsyncActions
): ICarouselAsync => {
  switch (action.type) {
    case ECarouselAsyncActionType.FetchRequest_CarouselImagesURLs:
      return {
        ...state,
        isLoading: true,
      };

    case ECarouselAsyncActionType.FetchSucceed_CarouselImagesURLs:
      return {
        urls: action.urls,
        err: "",
        isLoading: false,
      };

    case ECarouselAsyncActionType.FetchFail_CarouselImagesURLs:
      return {
        ...state,
        err: action.err,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
