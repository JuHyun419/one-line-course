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

// async search dep
import searchAsync, { ISearchAsync } from "./reducer/search-async/reducer";
import { TActions as TSearchAsyncActions } from "./action/search-async";

// search dep
import search, { ISearch } from "./reducer/search/reducer";
import { TActions as TSearchActions } from "./action/search";

// search bar dep
import searchBar, { ISearchBar } from "./reducer/search-bar/reducer";
import { TActions as TSearchBarActions } from "./action/search-bar";

// search suggestion dep
import searchSuggestion, {
  ISearchSuggestion,
} from "./reducer/search-suggestion/reducer";
import { TActions as TSearchSuggestionActions } from "./action/search-suggestion";

// search result dep
import searchResult, { ISearchResult } from "./reducer/search-result/reducer";
import { TActions as TSearchResultActions } from "./action/search-result";

// bookmark async (add bookmark) dep
import bookmarkAsync_AddBookmark, {
  IBookmarkAsync as IBookmarkAsync_AddBookmark,
} from "./reducer/bookmark-async/add-bookmark/reducer";

// bookmark async (remove bookmark) dep
import bookmarkAsync_RemoveBookmark, {
  IBookmarkAsync as IBookmarkAsync_RemoveBookmark,
} from "./reducer/bookmark-async/remove-bookmark/reducer";

// bookmark async (query all bookmarks) dep
import bookmarkAsync_QueryAllBookmarks, {
  IBookmarkAsync as IBookmarkAsync_QueryAllBookmarks,
} from "./reducer/bookmark-async/remove-bookmark/reducer";

import { TActions as TBookmarkAsyncActions } from "./action/bookmark-async";

export type TCombinedStates = CombinedState<{
  carouselAsync: ICarouselAsync;
  carousel: ICarousel;
  searchAsync: ISearchAsync;
  search: ISearch;
  searchBar: ISearchBar;
  searchSuggestion: ISearchSuggestion;
  searchResult: ISearchResult;
  bookmarkAsync_AddBookmark: IBookmarkAsync_AddBookmark;
  bookmarkAsync_RemoveBookmark: IBookmarkAsync_RemoveBookmark;
  bookmarkAsync_QueryAllBookmarks: IBookmarkAsync_QueryAllBookmarks;
}>;

export type TCombinedActions =
  | TCarouselAsyncActions
  | TCarouselActions
  | TSearchAsyncActions
  | TSearchActions
  | TSearchBarActions
  | TSearchSuggestionActions
  | TSearchResultActions
  | TBookmarkAsyncActions;

type TRootReducer = Reducer<TCombinedStates, TCombinedActions>;

const rootReducers: TRootReducer = combineReducers({
  carouselAsync,
  carousel,
  searchAsync,
  search,
  searchBar,
  searchSuggestion,
  searchResult,
  bookmarkAsync_AddBookmark,
  bookmarkAsync_RemoveBookmark,
  bookmarkAsync_QueryAllBookmarks,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const ReduxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
