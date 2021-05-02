import {
  EBookmarkAsync_QueryAllBookmarks_ActionType,
  IBookmarkData,
} from "~/src/typings";

export interface IFetchRequestAction_QueryAllBookmarks {
  type: EBookmarkAsync_QueryAllBookmarks_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_QueryAllBookmarks {
  type: EBookmarkAsync_QueryAllBookmarks_ActionType.FetchSucceed;
  statusCode: number;
  bookmarks: IBookmarkData[];
}

export interface IFetchFailAction_QueryAllBookmarks {
  type: EBookmarkAsync_QueryAllBookmarks_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_QueryAllBookmarks
  | IFetchSucceedAction_QueryAllBookmarks
  | IFetchFailAction_QueryAllBookmarks;
