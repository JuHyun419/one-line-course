import { EUserAsyncActionType } from "../../../typings";

export interface IFetchRequestAction_CreateUser {
  type: EUserAsyncActionType.FetchRequest_CreateUser;
  id: string;
  email: string;
  name: string;
  imageURL: string;
  platform: string;
}

export interface IFetchSucceed_CreateUser {
  type: EUserAsyncActionType.FetchSucceed_CreateUser;
  statusCode: string;
}

export interface IFetchFail_CreateUser {
  type: EUserAsyncActionType.FetchFail_CreateUser;
  errCode: string;
  err: string;
}

export type TActions =
  | IFetchRequestAction_CreateUser
  | IFetchSucceed_CreateUser
  | IFetchFail_CreateUser;
