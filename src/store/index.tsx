import React from "react";
import {
  createStore,
  applyMiddleware,
  Store,
  combineReducers,
  CombinedState,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  MainCarouselImageAction,
  MainCarouselImageFetchAction,
  MainCarouselImageFetchState,
  MainCarouselImageState,
} from "../typings/type";

import mainCarouselImageFetchReducer from "./reducer/MainCarouselImageFetch";
import mainCarouselImageReducer from "./reducer/MainCarouselImage";

const rootReducers = combineReducers({
  mainCarouselImagesFetch: mainCarouselImageFetchReducer,
  mainCarouselImage: mainCarouselImageReducer,
});

const store: Store<
  CombinedState<{
    mainCarouselImagesFetch: MainCarouselImageFetchState;
    mainCarouselImage: MainCarouselImageState;
  }>,
  MainCarouselImageFetchAction | MainCarouselImageAction
> & {
  dispatch: unknown;
} = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

const ReduxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
