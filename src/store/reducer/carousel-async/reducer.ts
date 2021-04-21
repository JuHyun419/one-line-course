import { Actions } from "../../action/carousel-async";

export interface CarouselImageURLs {
  urls?: Array<string>;
  err?: string;
  isLoading: boolean;
}

export interface State {
  carouselImg: CarouselImageURLs;
}

const init: CarouselImageURLs = {
  urls: [],
  err: "",
  isLoading: false,
};

const reducer = (
  state: CarouselImageURLs = init,
  action: Actions
): CarouselImageURLs => {
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
