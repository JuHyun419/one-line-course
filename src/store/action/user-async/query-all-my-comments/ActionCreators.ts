import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { get_QueryAllMyComments } from "~/src/service/UserService";

import {
  EUserAsync_QueryAllMyComments_ActionType,
  ICommentData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_QueryAllMyComments,
  IFetchSucceed_QueryAllMyComments,
  IFetchFail_QueryAllMyComments,
} from "./Actions";

const FetchRequest_QueryAllMyComments = (): IFetchRequestAction_QueryAllMyComments => ({
  type: EUserAsync_QueryAllMyComments_ActionType.FetchRequest,
});

const FetchSucceed_QueryAllMyComments = (
  comments: ICommentData[],
  statusCode: TStatusCode
): IFetchSucceed_QueryAllMyComments => ({
  type: EUserAsync_QueryAllMyComments_ActionType.FetchSucceed,
  comments,
  statusCode,
});

const FetchFail_QueryAllMyComments = (
  err: string
): IFetchFail_QueryAllMyComments => ({
  type: EUserAsync_QueryAllMyComments_ActionType.FetchFail,
  err,
});

export const initFetch_QueryAllMyComments = (userID: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(FetchRequest_QueryAllMyComments());
    const { commentData, status } = await get_QueryAllMyComments(userID);
    dispatch(FetchSucceed_QueryAllMyComments(commentData, status));
  } catch (err) {
    dispatch(FetchFail_QueryAllMyComments(err));
  }
};
