import {
  ECommentAsync_FixComment_ActionType,
  TStatusCode,
} from "~/src/typings";
import { TActions as TCommentAsyncActions } from "../../../action/comment-async";

export interface ICommentAsync {
  err?: string;
  statusCode: TStatusCode;
  isLoading: boolean;
}

export interface IState {
  state: ICommentAsync;
}

const init: ICommentAsync = {
  err: "",
  statusCode: 0,
  isLoading: false,
};

const reducer = (
  state: ICommentAsync = init,
  action: TCommentAsyncActions
): ICommentAsync => {
  switch (action.type) {
    case ECommentAsync_AddComment_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case ECommentAsync_AddComment_ActionType.FetchSucceed:
      return {
        ...state,
        statusCode: action.statusCode,
        isLoading: false,
      };

    case ECommentAsync_AddComment_ActionType.FetchFail:
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
