import { TActions as TUserAsyncActions } from "../../../action/user-async";
import {
  EUserAsync_QueryAllMyBookmarks_ActionType,
  IBookmarkData,
} from "~/src/typings";

export interface IUserAsync {
  bookmarks: Array<IBookmarkData>;
  err?: string;
  statusCode: number;
  isLoading: boolean;
}

export interface IState {
  state: IUserAsync;
}

const init: IUserAsync = {
  bookmarks: [],
  err: "",
  statusCode: 0,
  isLoading: false,
};

const reducer = (
  state: IUserAsync = init,
  action: TUserAsyncActions
): IUserAsync => {
  switch (action.type) {
    case EUserAsync_QueryAllMyBookmarks_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EUserAsync_QueryAllMyBookmarks_ActionType.FetchSucceed:
      return {
        ...state,
        bookmarks: action.bookmarks,
        statusCode: action.statusCode,
        isLoading: false,
      };

    case EUserAsync_QueryAllMyBookmarks_ActionType.FetchFail:
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
