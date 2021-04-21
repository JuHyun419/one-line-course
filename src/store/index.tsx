import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import { TStore, TRootReducer } from "../typings/type";

import carouselAsync from "./reducer/carousel-async/reducer";

import carousel from "./reducer/carousel-async/reducer";

const rootReducers = combineReducers({
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
