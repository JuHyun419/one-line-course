import React from "react";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  CombinedState,
  Reducer,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import { TStore, TRootReducer } from "../typings/type";

import carouselAsync, {
  CarouselFetcher,
} from "./reducer/carousel-async/reducer";
import { Actions as CarouselAsyncActions } from "./action/carousel-async";

import carousel, { Carousel } from "./reducer/carousel/reducer";
import { Actions as CarouselActions } from "./action/carousel";

export type CombinedCarousel = CombinedState<{
  carouselAsync: CarouselFetcher;
  carousel: Carousel;
}>;

type TRootReducer = Reducer<
  CombinedCarousel,
  CarouselAsyncActions | CarouselActions
>;

const rootReducers: TRootReducer = combineReducers({
  carouselAsync,
  carousel,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const ReduxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
