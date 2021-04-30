import { TActions as TUserAsyncActions } from "../../../action/user-async";
import {
  EUserAsync_QueryAllMyComments_ActionType,
  ICommentData,
} from "~/src/typings";

export interface IUserAsync {
  comments: Array<ICommentData>;
  err?: string;
  statusCode: number;
  isLoading: boolean;
}

export interface IState {
  state: IUserAsync;
}

const init: IUserAsync = {
  comments: [],
  err: "",
  statusCode: 0,
  isLoading: false,
};

const reducer = (
  state: IUserAsync = init,
  action: TUserAsyncActions
): IUserAsync => {
  switch (action.type) {
    case EUserAsync_QueryAllMyComments_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EUserAsync_QueryAllMyComments_ActionType.FetchSucceed:
      return {
        ...state,
        comments: action.comments,
        statusCode: action.statusCode,
        isLoading: false,
      };

    case EUserAsync_QueryAllMyComments_ActionType.FetchFail:
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
