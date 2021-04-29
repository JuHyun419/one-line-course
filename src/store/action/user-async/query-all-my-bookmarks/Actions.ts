import {
  EUserAsync_QueryAllMyBookmarks_ActionType,
  IBookmarkData,
} from "~/src/typings";

export interface IFetchRequestAction_QueryAllMyBookmarks {
  type: EUserAsync_QueryAllMyBookmarks_ActionType.FetchRequest;
}

export interface IFetchSucceed_QueryAllMyBookmarks {
  type: EUserAsync_QueryAllMyBookmarks_ActionType.FetchSucceed;
  bookmarks: IBookmarkData[];
  statusCode: number;
}

export interface IFetchFail_QueryAllMyBookmarks {
  type: EUserAsync_QueryAllMyBookmarks_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_QueryAllMyBookmarks
  | IFetchSucceed_QueryAllMyBookmarks
  | IFetchFail_QueryAllMyBookmarks;
