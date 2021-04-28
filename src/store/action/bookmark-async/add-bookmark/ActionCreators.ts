import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  EBookmarkAsync_AddBookmark_ActionType,
  IBookmarkData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_AddBookmark,
  IFetchSucceedAction_AddBookmark,
  IFetchFailAction_AddBookmark,
} from "./Actions";
import { post_AddBookmark } from "~/src/service/BookmarkService";

// Add Bookmark
const fetchRequest_AddBookmark = (): IFetchRequestAction_AddBookmark => ({
  type: EBookmarkAsync_AddBookmark_ActionType.FetchRequest,
});

const fetchSucceed_AddBookmark = (
  statusCode: TStatusCode
): IFetchSucceedAction_AddBookmark => ({
  type: EBookmarkAsync_AddBookmark_ActionType.FetchSucceed,
  statusCode,
});

const fetchFail_AddBookmark = (err: string): IFetchFailAction_AddBookmark => ({
  type: EBookmarkAsync_AddBookmark_ActionType.FetchFail,
  err,
});

export const initFetch_AddBookmark = (
  userID: string,
  bookmarkData: IBookmarkData
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  try {
    dispatch(fetchRequest_AddBookmark());
    const status = await post_AddBookmark(userID, bookmarkData);
    dispatch(fetchSucceed_AddBookmark(status));
  } catch (err) {
    dispatch(fetchFail_AddBookmark(err));
  }
};
