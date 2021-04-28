import { EUserAsyncActionType } from "../../../typings";

export interface IFetchRequestAction_CreateUser {
  type: EUserAsyncActionType.FetchRequest_CreateUser;
  userID: string;
  email: string;
  name: string;
  imageURL: string;
  platform: "google" | "kakao";
}

export interface IFetchSucceed_CreateUser {
  type: EUserAsyncActionType.FetchSucceed_CreateUser;
  statusCode: number;
}

export interface IFetchFail_CreateUser {
  type: EUserAsyncActionType.FetchFail_CreateUser;
  err: string;
}

export type TActions =
  | IFetchRequestAction_CreateUser
  | IFetchSucceed_CreateUser
  | IFetchFail_CreateUser;
