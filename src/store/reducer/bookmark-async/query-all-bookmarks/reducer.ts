import {
  EBookmarkAsync_QueryAllBookmarks_ActionType,
  IBookmarkData,
} from "~/src/typings";
import { TActions as TBookmarkAsyncActions } from "../../../action/bookmark-async";

export interface IBookmarkAsync {
  bookmarks: Array<IBookmarkData>;
  err?: string;
  isLoading: boolean;
}

export interface IState {
  state: IBookmarkAsync;
}

const init: IBookmarkAsync = {
  bookmarks: [],
  err: "",
  isLoading: false,
};

const reducer = (
  state: IBookmarkAsync = init,
  action: TBookmarkAsyncActions
): IBookmarkAsync => {
  switch (action.type) {
    case EBookmarkAsync_QueryAllBookmarks_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EBookmarkAsync_QueryAllBookmarks_ActionType.FetchSucceed:
      return {
        bookmarks: action.bookmarks,
        err: "",
        isLoading: false,
      };

    case EBookmarkAsync_QueryAllBookmarks_ActionType.FetchFail:
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
