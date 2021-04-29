import { EUserAsync_CreateUser_ActionType, IUserData } from "~/src/typings";

export interface IFetchRequestAction_CreateUser {
  type: EUserAsync_CreateUser_ActionType.FetchRequest;
}

export interface IFetchSucceed_CreateUser {
  type: EUserAsync_CreateUser_ActionType.FetchSucceed;
  statusCode: number;
}

export interface IFetchFail_CreateUser {
  type: EUserAsync_CreateUser_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_CreateUser
  | IFetchSucceed_CreateUser
  | IFetchFail_CreateUser;
