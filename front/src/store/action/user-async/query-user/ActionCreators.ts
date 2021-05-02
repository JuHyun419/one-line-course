import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { get_QueryUser } from "~/src/service/UserService";

import {
  EUserAsync_QueryUser_ActionType,
  IUserData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_QueryUser,
  IFetchSucceed_QueryUser,
  IFetchFail_QueryUser,
} from "./Actions";

const FetchRequest_QueryUser = (): IFetchRequestAction_QueryUser => ({
  type: EUserAsync_QueryUser_ActionType.FetchRequest,
});

const FetchSucceed_QueryUser = (
  user: IUserData,
  statusCode: TStatusCode
): IFetchSucceed_QueryUser => ({
  type: EUserAsync_QueryUser_ActionType.FetchSucceed,
  user,
  statusCode,
});

const FetchFail_QueryUser = (err: string): IFetchFail_QueryUser => ({
  type: EUserAsync_QueryUser_ActionType.FetchFail,
  err,
});

export const initFetch_QueryUser = (userID: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(FetchRequest_QueryUser());
    const { userData, status } = await get_QueryUser(userID);
    dispatch(FetchSucceed_QueryUser(userData, status));
  } catch (err) {
    dispatch(FetchFail_QueryUser(err));
  }
};
