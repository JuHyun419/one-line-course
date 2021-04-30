import {
  IFetchRequestAction_CreateUser,
  IFetchSucceed_CreateUser,
  IFetchFail_CreateUser,
  TActions as TActions_CreateUser,
} from "./create-user/Actions";

import { initFetch_CreateUser } from "./create-user/ActionCreators";

import {
  IFetchRequestAction_QueryAllMyBookmarks,
  IFetchSucceed_QueryAllMyBookmarks,
  IFetchFail_QueryAllMyBookmarks,
  TActions as TActions_QueryAllMyBookmarks,
} from "./query-all-my-bookmarks/Actions";

import { initFetch_QueryAllMyBookmarks } from "./query-all-my-bookmarks/ActionCreators";

import {
  IFetchRequestAction_QueryAllMyComments,
  IFetchSucceed_QueryAllMyComments,
  IFetchFail_QueryAllMyComments,
  TActions as TActions_QueryAllMyComments,
} from "./query-all-my-comments/Actions";

import { initFetch_QueryAllMyComments } from "./query-all-my-comments/ActionCreators";

import {
  IFetchRequestAction_QueryUser,
  IFetchSucceed_QueryUser,
  IFetchFail_QueryUser,
  TActions as TActions_QueryUser,
} from "./query-user/Actions";

import { initFetch_QueryUser } from "./query-user/ActionCreators";

type TActions =
  | TActions_CreateUser
  | TActions_QueryAllMyBookmarks
  | TActions_QueryAllMyComments
  | TActions_QueryUser;

export {
  TActions,
  //
  IFetchRequestAction_CreateUser,
  IFetchSucceed_CreateUser,
  IFetchFail_CreateUser,
  //
  IFetchRequestAction_QueryAllMyBookmarks,
  IFetchSucceed_QueryAllMyBookmarks,
  IFetchFail_QueryAllMyBookmarks,
  //
  IFetchRequestAction_QueryAllMyComments,
  IFetchSucceed_QueryAllMyComments,
  IFetchFail_QueryAllMyComments,
  //
  IFetchRequestAction_QueryUser,
  IFetchSucceed_QueryUser,
  IFetchFail_QueryUser,
  //
  initFetch_CreateUser,
  initFetch_QueryAllMyBookmarks,
  initFetch_QueryAllMyComments,
  initFetch_QueryUser,
};
