import {
  ECommentAsync_QueryAllComments_ActionType,
  ICommentData,
  TStatusCode,
} from "~/src/typings";

export interface IFetchRequestAction_QueryAllComments {
  type: ECommentAsync_QueryAllComments_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_QueryAllComments {
  type: ECommentAsync_QueryAllComments_ActionType.FetchSucceed;
  comments: ICommentData[];
  status: TStatusCode;
}

export interface IFetchFailedAction_QueryAllComments {
  type: ECommentAsync_QueryAllComments_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_QueryAllComments
  | IFetchSucceedAction_QueryAllComments
  | IFetchFailedAction_QueryAllComments;
