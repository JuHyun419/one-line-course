import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { post_RegisterUser } from "~/src/service/UserService";

import { EUserAsyncActionType, IUserData, TStatusCode } from "../../../typings";
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
  statusCode: TStatusCode
): IFetchSucceed_CreateUser => ({
  type: EUserAsyncActionType.FetchSucceed_CreateUser,
  statusCode,
});

export const FetchFail_CreateUser = (err: string): IFetchFail_CreateUser => ({
  type: EUserAsyncActionType.FetchFail_CreateUser,
  err,
});

export const initFetch_CreateUser = (data: IUserData) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    console.log(data);
    
    dispatch(FetchRequest_CreateUser(data));
    const status = await post_RegisterUser(data);
    dispatch(FetchSucceed_CreateUser(status));
  } catch (err) {
    dispatch(FetchFail_CreateUser(err));
  }
};
