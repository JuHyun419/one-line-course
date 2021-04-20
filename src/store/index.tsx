import { createStore, applyMiddleware, Store } from "redux";
// import applyMiddleware from "redux";
// import Store from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";

import carouselImagesReducer, {
  CarouselImageState,
  CarouselImageAction,
  CarouselImageDispatch,
} from "./reducer/CarouselImage";

export const store: Store<CarouselImageState, CarouselImageAction> & {
  dispatch: unknown;
} = createStore(carouselImagesReducer, applyMiddleware(thunk));

const ReduxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
