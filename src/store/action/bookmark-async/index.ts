import {
  TActions as TActions_AddBookmark,
  IFetchRequestAction_AddBookmark,
  IFetchSucceedAction_AddBookmark,
  IFetchFailAction_AddBookmark,
} from "./add-bookmark/Actions";

import { initFetch_AddBookmark } from "./add-bookmark/ActionCreators";

import {
  TActions as TActions_RemoveBookmark,
  IFetchRequestAction_RemoveBookmark,
  IFetchSucceedAction_RemoveBookmark,
  IFetchFailAction_RemoveBookmark,
} from "./remove-bookmark/Actions";

import { initFetch_RemoveBookmark } from "./remove-bookmark/ActionCreators";

import {
  TActions as TActions_QueryAllBookmarks,
  IFetchRequestAction_QueryAllBookmarks,
  IFetchSucceedAction_QueryAllBookmarks,
  IFetchFailAction_QueryAllBookmarks,
} from "./query-all-bookmarks/Actions";

import { initFetch_QueryAllBookmarks } from "./query-all-bookmarks/ActionCreators";

type TActions = TActions_AddBookmark | TActions_RemoveBookmark | TActions_QueryAllBookmarks;

export {
  TActions,
  IFetchRequestAction_AddBookmark,
  IFetchSucceedAction_AddBookmark,
  IFetchFailAction_AddBookmark,
  IFetchRequestAction_RemoveBookmark,
  IFetchSucceedAction_RemoveBookmark,
  IFetchFailAction_RemoveBookmark,
  IFetchRequestAction_QueryAllBookmarks,
  IFetchSucceedAction_QueryAllBookmarks,
  IFetchFailAction_QueryAllBookmarks,
  initFetch_AddBookmark,
  initFetch_RemoveBookmark,
  initFetch_QueryAllBookmarks,
};
