import { Actions as CarouselAsyncActions } from "../../action/carousel-async";

export interface CarouselFetcher {
  urls?: Array<string>;
  err?: string;
  isLoading: boolean;
}

export interface State {
  fetcher: CarouselFetcher;
}

const init: CarouselFetcher = {
  urls: [],
  err: "",
  isLoading: false,
};

const reducer = (
  state: CarouselFetcher = init,
  action: CarouselAsyncActions
): CarouselFetcher => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_SUCCEED":
      return {
        urls: action.urls,
        err: "",
        isLoading: false,
      };

    case "FETCH_FAIL":
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
