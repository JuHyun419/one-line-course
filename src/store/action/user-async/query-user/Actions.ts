import { EUserAsync_QueryUser_ActionType, IUserData } from "~/src/typings";

export interface IFetchRequestAction_QueryUser {
  type: EUserAsync_QueryUser_ActionType.FetchRequest;
}

export interface IFetchSucceed_QueryUser {
  type: EUserAsync_QueryUser_ActionType.FetchSucceed;
  user: IUserData;
  statusCode: number;
}

export interface IFetchFail_QueryUser {
  type: EUserAsync_QueryUser_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_QueryUser
  | IFetchSucceed_QueryUser
  | IFetchFail_QueryUser;
