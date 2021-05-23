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

// carousel async dep
import carouselAsync, {
  ICarouselAsync,
} from "./reducer/carousel-async/reducer";
import { TActions as TCarouselAsyncActions } from "./action/carousel-async";

// carousel dep
import carousel, { ICarousel } from "./reducer/carousel/reducer";
import { TActions as TCarouselActions } from "./action/carousel";

// search async dep
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

// user async (create user) dep
import userAsync_CreateUser, {
  IUserAsync as IUserAsync_CreateUser,
} from "./reducer/user-async/create-user/reducer";

// user async (query all my bookmarks) dep
import userAsync_QueryAllMyBookmarks, {
  IUserAsync as IUserAsync_QueryAllMyBookmarks,
} from "./reducer/user-async/query-all-my-bookmarks/reducer";

// user async (query all my comments) dep
import userAsync_QueryAllMyComments, {
  IUserAsync as IUserAsync_QueryAllMyComments,
} from "./reducer/user-async/query-all-my-comments/reducer";

// user async (query user) dep
import userAsync_QueryUser, {
  IUserAsync as IUserAsync_QueryUser,
} from "./reducer/user-async/query-user/reducer";

import { TActions as TUserAsyncActions } from "./action/user-async";

// user dep
import user, { IUser } from "./reducer/user/reducer";
import { TActions as TUserActions } from "./action/user";

// comment async (add comment) dep
import commentAsync_AddComment, {
  ICommentAsync as ICommentAsync_AddComment,
} from "./reducer/comment-async/add-comment/reducer";

// comment async (fix comment) dep
import commentAsync_FixComment, {
  ICommentAsync as ICommentAsync_FixComment,
} from "./reducer/comment-async/fix-comment/reducer";

// comment async (query all comments) dep
import commentAsync_QueryAllComments, {
  ICommentAsync as ICommentAsync_QueryAllComments,
} from "./reducer/comment-async/query-all-comments/reducer";

// comment async (remove comment) dep
import commentAsync_RemoveComment, {
  ICommentAsync as ICommentAsync_RemoveComment,
} from "./reducer/comment-async/remove-comment/reducer";

import { TActions as TCommentAsyncActions } from "./action/comment-async";

export type TCombinedStates = CombinedState<{
  // carousel
  carouselAsync: ICarouselAsync;
  carousel: ICarousel;
  // search
  searchAsync: ISearchAsync;
  search: ISearch;
  // search bar
  searchBar: ISearchBar;
  // search suggestion
  searchSuggestion: ISearchSuggestion;
  // search suggestion
  searchResult: ISearchResult;
  // bookmark
  bookmarkAsync_AddBookmark: IBookmarkAsync_AddBookmark;
  bookmarkAsync_RemoveBookmark: IBookmarkAsync_RemoveBookmark;
  bookmarkAsync_QueryAllBookmarks: IBookmarkAsync_QueryAllBookmarks;
  // user
  userAsync_CreateUser: IUserAsync_CreateUser;
  userAsync_QueryAllMyBookmarks: IUserAsync_QueryAllMyBookmarks;
  userAsync_QueryAllMyComments: IUserAsync_QueryAllMyComments;
  userAsync_QueryUser: IUserAsync_QueryUser;

  user: IUser;
  // comment
  commentAsync_AddComment: ICommentAsync_AddComment;
  commentAsync_FixComment: ICommentAsync_FixComment;
  commentAsync_QueryAllComments: ICommentAsync_QueryAllComments;
  commentAsync_RemoveComment: ICommentAsync_RemoveComment;
}>;

export type TCombinedActions =
  | TCarouselAsyncActions
  | TCarouselActions
  | TSearchAsyncActions
  | TSearchActions
  | TSearchBarActions
  | TSearchSuggestionActions
  | TSearchResultActions
  | TBookmarkAsyncActions
  | TUserAsyncActions
  | TUserActions
  | TCommentAsyncActions;

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
  userAsync_CreateUser,
  userAsync_QueryAllMyBookmarks,
  userAsync_QueryAllMyComments,
  userAsync_QueryUser,
  user,
  commentAsync_AddComment,
  commentAsync_FixComment,
  commentAsync_QueryAllComments,
  commentAsync_RemoveComment,
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const ReduxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => <Provider store={store}>{children}</Provider>;
