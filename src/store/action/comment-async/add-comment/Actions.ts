import {
  ECommentAsync_AddComment_ActionType,
  TStatusCode,
} from "~/src/typings";

export interface IFetchRequestAction_AddComment {
  type: ECommentAsync_AddComment_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_AddComment {
  type: ECommentAsync_AddComment_ActionType.FetchSucceed;
  statusCode: TStatusCode;
}

export interface IFetchFailAction_AddComment {
  type: ECommentAsync_AddComment_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_AddComment
  | IFetchSucceedAction_AddComment
  | IFetchFailAction_AddComment;
