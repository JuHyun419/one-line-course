import {
  TActions as TActions_AddComment,
  IFetchRequestAction_AddComment,
  IFetchSucceedAction_AddComment,
  IFetchFailAction_AddComment,
} from "./add-comment/Actions";

import { initFetch_AddComment } from "./add-comment/ActionCreators";

import {
  TActions as TActions_FixComment,
  IFetchRequestAction_FixComment,
  IFetchSucceedAction_FixComment,
  IFetchFailAction_FixComment,
} from "./fix-comment/Actions";

import { initFetch_FixComment } from "./fix-comment/ActionCreators";

import {
  TActions as TActions_QueryAllComments,
  IFetchRequestAction_QueryAllComments,
  IFetchSucceedAction_QueryAllComments,
  IFetchFailedAction_QueryAllComments,
} from "./query-all-comments/Actions";

import { initFetch_QueryAllComments } from "./query-all-comments/ActionCreators";

import {
  TActions as TActions_RemoveComments,
  IFetchRequestAction_RemoveComment,
  IFetchSucceedAction_RemoveComment,
  IFetchFailAction_RemoveComment,
} from "./remove-comment/Actions";

import { initFetch_RemoveComment } from "./remove-comment/ActionsCreators";

type TActions =
  | TActions_AddComment
  | TActions_FixComment
  | TActions_QueryAllComments
  | TActions_RemoveComments;

export {
  TActions,
  //
  IFetchRequestAction_AddComment,
  IFetchSucceedAction_AddComment,
  IFetchFailAction_AddComment,
  //
  IFetchRequestAction_FixComment,
  IFetchSucceedAction_FixComment,
  IFetchFailAction_FixComment,
  //
  IFetchRequestAction_QueryAllComments,
  IFetchSucceedAction_QueryAllComments,
  IFetchFailedAction_QueryAllComments,
  //
  IFetchRequestAction_RemoveComment,
  IFetchSucceedAction_RemoveComment,
  IFetchFailAction_RemoveComment,
  //
  initFetch_AddComment,
  initFetch_FixComment,
  initFetch_QueryAllComments,
  initFetch_RemoveComment,
};
