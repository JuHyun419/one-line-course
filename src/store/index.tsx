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

// async carousel dep
import carouselAsync, {
  ICarouselAsync,
} from "./reducer/carousel-async/reducer";
import { TActions as TCarouselAsyncActions } from "./action/carousel-async";

// carousel dep
import carousel, { ICarousel } from "./reducer/carousel/reducer";
import { TActions as TCarouselActions } from "./action/carousel";

import searchAsync, { ISearchAsync } from "./reducer/search-async/reducer";
import { TActions as TSearchAsyncActions } from "./action/search-async";

export type TCombinedStates = CombinedState<{
  carouselAsync: ICarouselAsync;
  carousel: ICarousel;
  searchAsync: ISearchAsync;
}>;

export type TCombinedActions =
  | TCarouselAsyncActions
  | TCarouselActions
  | TSearchAsyncActions;

type TRootReducer = Reducer<TCombinedStates, TCombinedActions>;

const rootReducers: TRootReducer = combineReducers({
  carouselAsync,
  carousel,
  searchAsync,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const ReduxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
