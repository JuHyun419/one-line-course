import {
  ECommentAsync_FixComment_ActionType,
  TStatusCode,
} from "~/src/typings";

export interface IFetchRequestAction_FixComment {
  type: ECommentAsync_FixComment_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_FixComment {
  type: ECommentAsync_FixComment_ActionType.FetchSucceed;
  status: TStatusCode;
}

export interface IFetchFailAction_FixComment {
  type: ECommentAsync_FixComment_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_FixComment
  | IFetchSucceedAction_FixComment
  | IFetchFailAction_FixComment;
