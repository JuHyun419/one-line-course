import { EBookmarkAsync_RemoveBookmark_ActionType } from "~/src/typings";

export interface IFetchRequestAction_RemoveBookmark {
  type: EBookmarkAsync_RemoveBookmark_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_RemoveBookmark {
  type: EBookmarkAsync_RemoveBookmark_ActionType.FetchSucceed;
  statusCode: number;
}

export interface IFetchFailAction_RemoveBookmark {
  type: EBookmarkAsync_RemoveBookmark_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_RemoveBookmark
  | IFetchSucceedAction_RemoveBookmark
  | IFetchFailAction_RemoveBookmark;
