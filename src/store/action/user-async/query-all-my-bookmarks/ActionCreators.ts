import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { get_QueryAllMyBookmarks } from "~/src/service/UserService";

import {
  EUserAsync_QueryAllMyBookmarks_ActionType,
  IBookmarkData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_QueryAllMyBookmarks,
  IFetchSucceed_QueryAllMyBookmarks,
  IFetchFail_QueryAllMyBookmarks,
} from "./Actions";

const FetchRequest_QueryAllMyBookmarks = (): IFetchRequestAction_QueryAllMyBookmarks => ({
  type: EUserAsync_QueryAllMyBookmarks_ActionType.FetchRequest,
});

const FetchSucceed_QueryAllMyBookmarks = (
  bookmarks: IBookmarkData[],
  statusCode: TStatusCode
): IFetchSucceed_QueryAllMyBookmarks => ({
  type: EUserAsync_QueryAllMyBookmarks_ActionType.FetchSucceed,
  bookmarks,
  statusCode,
});

const FetchFail_QueryAllMyBookmarks = (
  err: string
): IFetchFail_QueryAllMyBookmarks => ({
  type: EUserAsync_QueryAllMyBookmarks_ActionType.FetchFail,
  err,
});

export const initFetch_QueryAllMyBookmarks = (userID: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(FetchRequest_QueryAllMyBookmarks());
    const { bookmarkData, status } = await get_QueryAllMyBookmarks(userID);
    dispatch(FetchSucceed_QueryAllMyBookmarks(bookmarkData, status));
  } catch (err) {
    dispatch(FetchFail_QueryAllMyBookmarks(err));
  }
};
