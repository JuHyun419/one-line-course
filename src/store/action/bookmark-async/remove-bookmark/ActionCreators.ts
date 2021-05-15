import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  EBookmarkAsync_RemoveBookmark_ActionType,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_RemoveBookmark,
  IFetchSucceedAction_RemoveBookmark,
  IFetchFailAction_RemoveBookmark,
} from "./Actions";
import { delete_RemoveBookmark } from "~/src/service/BookmarkService";

const fetchRequest_RemoveBookmark = (): IFetchRequestAction_RemoveBookmark => ({
  type: EBookmarkAsync_RemoveBookmark_ActionType.FetchRequest,
});

const fetchSucceed_RemoveBookmark = (
  statusCode: TStatusCode
): IFetchSucceedAction_RemoveBookmark => ({
  type: EBookmarkAsync_RemoveBookmark_ActionType.FetchSucceed,
  statusCode,
});

const fetchFail_RemoveBookmark = (
  err: string
): IFetchFailAction_RemoveBookmark => ({
  type: EBookmarkAsync_RemoveBookmark_ActionType.FetchFail,
  err,
});

export const initFetch_RemoveBookmark =
  (bookmarkID: number, after: Function) =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      dispatch(fetchRequest_RemoveBookmark());
      const status = await delete_RemoveBookmark(bookmarkID);
      console.log("bookmark DELETED", status);
      dispatch(fetchSucceed_RemoveBookmark(status));
      after();
    } catch (err) {
      dispatch(fetchFail_RemoveBookmark(err));
    }
  };
