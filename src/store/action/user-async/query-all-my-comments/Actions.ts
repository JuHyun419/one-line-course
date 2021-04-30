import {
  EUserAsync_QueryAllMyComments_ActionType,
  ICommentData,
} from "~/src/typings";

export interface IFetchRequestAction_QueryAllMyComments {
  type: EUserAsync_QueryAllMyComments_ActionType.FetchRequest;
}

export interface IFetchSucceed_QueryAllMyComments {
  type: EUserAsync_QueryAllMyComments_ActionType.FetchSucceed;
  comments: ICommentData[];
  statusCode: number;
}

export interface IFetchFail_QueryAllMyComments {
  type: EUserAsync_QueryAllMyComments_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_QueryAllMyComments
  | IFetchSucceed_QueryAllMyComments
  | IFetchFail_QueryAllMyComments;
