import { EBookmarkAsync_RemoveBookmark_ActionType } from "~/src/typings";
import { TActions as TBookmarkAsyncActions } from "../../../action/bookmark-async";

export interface IBookmarkAsync {
  err?: string;
  isLoading: boolean;
}

export interface IState {
  state: IBookmarkAsync;
}

const init: IBookmarkAsync = {
  err: "",
  isLoading: false,
};

const reducer = (
  state: IBookmarkAsync = init,
  action: TBookmarkAsyncActions
): IBookmarkAsync => {
  switch (action.type) {
    case EBookmarkAsync_RemoveBookmark_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EBookmarkAsync_RemoveBookmark_ActionType.FetchSucceed:
      return {
        ...state,
        err: "",
        isLoading: false,
      };

    case EBookmarkAsync_RemoveBookmark_ActionType.FetchFail:
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
