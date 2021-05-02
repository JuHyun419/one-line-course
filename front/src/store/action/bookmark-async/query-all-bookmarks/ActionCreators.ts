import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  EBookmarkAsync_QueryAllBookmarks_ActionType,
  IBookmarkData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_QueryAllBookmarks,
  IFetchSucceedAction_QueryAllBookmarks,
  IFetchFailAction_QueryAllBookmarks,
} from "./Actions";
import { get_QueryAllMyBookmarks } from "~/src/service/UserService";

const fetchRequest_QueryAllBookmarks = (): IFetchRequestAction_QueryAllBookmarks => ({
  type: EBookmarkAsync_QueryAllBookmarks_ActionType.FetchRequest,
});

const fetchSucceed_QueryAllBookmarks = (
  statusCode: TStatusCode,
  bookmarks: IBookmarkData[]
): IFetchSucceedAction_QueryAllBookmarks => ({
  type: EBookmarkAsync_QueryAllBookmarks_ActionType.FetchSucceed,
  statusCode,
  bookmarks,
});

const fetchFail_QueryAllBookmarks = (
  err: string
): IFetchFailAction_QueryAllBookmarks => ({
  type: EBookmarkAsync_QueryAllBookmarks_ActionType.FetchFail,
  err,
});

export const initFetch_QueryAllBookmarks = (userID: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(fetchRequest_QueryAllBookmarks());
    const { bookmarkData, status } = await get_QueryAllMyBookmarks(userID);
    dispatch(fetchSucceed_QueryAllBookmarks(status, bookmarkData));
  } catch (err) {
    dispatch(fetchFail_QueryAllBookmarks(err));
  }
};
