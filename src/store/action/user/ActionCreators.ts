import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { EUserAsyncActionType } from "../../../typings";
import {
  IFetchRequestAction_CreateUser,
  IFetchSucceed_CreateUser,
  IFetchFail_CreateUser,
} from "./Actions";

export interface ICreateUserData {
  id: string;
  email: string;
  name: string;
  imageURL: string;
  platform: string;
}

export const FetchRequest_CreateUser = (
  data: ICreateUserData
): IFetchRequestAction_CreateUser => {
  const { id, email, name, imageURL, platform } = data;
  return {
    type: EUserAsyncActionType.FetchRequest_CreateUser,
    id,
    email,
    name,
    imageURL,
    platform,
  };
};

export const FetchSucceed_CreateUser = (
  statusCode: string
): IFetchSucceed_CreateUser => ({
  type: EUserAsyncActionType.FetchSucceed_CreateUser,
  statusCode,
});

export const FetchFail_CreateUser = (
  errCode: string,
  err: string
): IFetchFail_CreateUser => ({
  type: EUserAsyncActionType.FetchFail_CreateUser,
  errCode,
  err,
});

export const initFetch_CreateUser = (data: ICreateUserData) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(FetchRequest_CreateUser(data));
    // TODO: post create user
    // TODO: get status code
    dispatch(FetchSucceed_CreateUser("TEST_SUCCEED_CODE"));
  } catch (err) {
    dispatch(FetchFail_CreateUser("TEST_ERROR_CODE", err));
  }
};
