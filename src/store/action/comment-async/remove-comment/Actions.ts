import {
  ECommentAsync_RemoveComment_ActionType,
  TStatusCode,
} from "~/src/typings";

export interface IFetchRequestAction_RemoveComment {
  type: ECommentAsync_RemoveComment_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_RemoveComment {
  type: ECommentAsync_RemoveComment_ActionType.FetchSucceed;
  status: TStatusCode;
}

export interface IFetchFailAction_RemoveComment {
  type: ECommentAsync_RemoveComment_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_RemoveComment
  | IFetchSucceedAction_RemoveComment
  | IFetchFailAction_RemoveComment;
