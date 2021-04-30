import {
  ECommentAsync_RemoveComment_ActionType,
  TStatusCode,
} from "~/src/typings";

import { TActions as TCommentAsyncActions } from "../../../action/comment-async";

export interface ICommentAsync {
  err?: string;
  status: TStatusCode;
  isLoading: boolean;
}

export interface IState {
  state: ICommentAsync;
}

const init: ICommentAsync = {
  err: "",
  status: 0,
  isLoading: false,
};

const reducer = (
  state: ICommentAsync = init,
  action: TCommentAsyncActions
): ICommentAsync => {
  switch (action.type) {
    case ECommentAsync_RemoveComment_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case ECommentAsync_RemoveComment_ActionType.FetchSucceed:
      return {
        ...state,
        status: action.status,
        isLoading: false,
      };

    case ECommentAsync_RemoveComment_ActionType.FetchFail:
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
