import { EBookmarkAsync_AddBookmark_ActionType } from "~/src/typings";

export interface IFetchRequestAction_AddBookmark {
  type: EBookmarkAsync_AddBookmark_ActionType.FetchRequest;
}

export interface IFetchSucceedAction_AddBookmark {
  type: EBookmarkAsync_AddBookmark_ActionType.FetchSucceed;
  statusCode: number;
}

export interface IFetchFailAction_AddBookmark {
  type: EBookmarkAsync_AddBookmark_ActionType.FetchFail;
  err: string;
}

export type TActions =
  | IFetchRequestAction_AddBookmark
  | IFetchSucceedAction_AddBookmark
  | IFetchFailAction_AddBookmark;
