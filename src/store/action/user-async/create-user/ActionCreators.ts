import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { post_RegisterUser } from "~/src/service/UserService";

import {
  EUserAsync_CreateUser_ActionType,
  IUserData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_CreateUser,
  IFetchSucceed_CreateUser,
  IFetchFail_CreateUser,
} from "./Actions";

const FetchRequest_CreateUser = (): IFetchRequestAction_CreateUser => ({
  type: EUserAsync_CreateUser_ActionType.FetchRequest,
});

const FetchSucceed_CreateUser = (
  statusCode: TStatusCode
): IFetchSucceed_CreateUser => ({
  type: EUserAsync_CreateUser_ActionType.FetchSucceed,
  statusCode,
});

const FetchFail_CreateUser = (err: string): IFetchFail_CreateUser => ({
  type: EUserAsync_CreateUser_ActionType.FetchFail,
  err,
});

export const initFetch_CreateUser = (data: IUserData) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(FetchRequest_CreateUser());
    const status = await post_RegisterUser(data);
    // console.log("User data is sent by POST!", data);
    dispatch(FetchSucceed_CreateUser(status));
  } catch (err) {
    dispatch(FetchFail_CreateUser(err));
  }
};
