import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { EUserAsyncActionType, IUserData } from "../../../typings";
import {
  IFetchRequestAction_CreateUser,
  IFetchSucceed_CreateUser,
  IFetchFail_CreateUser,
} from "./Actions";

export const FetchRequest_CreateUser = (
  data: IUserData
): IFetchRequestAction_CreateUser => {
  const { userID, email, name, imageURL, platform } = data;
  return {
    type: EUserAsyncActionType.FetchRequest_CreateUser,
    userID,
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

export const initFetch_CreateUser = (data: IUserData) => async (
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
