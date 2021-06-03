import {
  EBookmarkAsync_AddBookmark_ActionType,
  IBookmarkData,
} from "~/src/typings";
import { TActions as TBookmarkAsyncActions } from "../../../action/bookmark-async";

export interface IBookmarkAsync {
  createdBookmark: IBookmarkData | null;
  err?: string;
  isLoading: boolean;
}

export interface IState {
  state: IBookmarkAsync;
}

const init: IBookmarkAsync = {
  createdBookmark: null,
  err: "",
  isLoading: false,
};

const reducer = (
  state: IBookmarkAsync = init,
  action: TBookmarkAsyncActions
): IBookmarkAsync => {
  switch (action.type) {
    case EBookmarkAsync_AddBookmark_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EBookmarkAsync_AddBookmark_ActionType.FetchSucceed:
      return {
        createdBookmark: action.createdBookmark,
        err: "",
        isLoading: false,
      };

    case EBookmarkAsync_AddBookmark_ActionType.FetchFail:
      return {
        ...state,
        err: action.err,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
