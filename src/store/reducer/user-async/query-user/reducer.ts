import { TActions as TUserAsyncActions } from "../../../action/user-async";
import { EUserAsync_QueryUser_ActionType, IUserData } from "~/src/typings";

export interface IUserAsync {
  user: IUserData | null;
  err?: string;
  statusCode: number;
  isLoading: boolean;
}

export interface IState {
  state: IUserAsync;
}

const init: IUserAsync = {
  user: null,
  err: "",
  statusCode: 0,
  isLoading: false,
};

const reducer = (
  state: IUserAsync = init,
  action: TUserAsyncActions
): IUserAsync => {
  switch (action.type) {
    case EUserAsync_QueryUser_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EUserAsync_QueryUser_ActionType.FetchSucceed:
      return {
        ...state,
        user: action.user,
        statusCode: action.statusCode,
        isLoading: false,
      };

    case EUserAsync_QueryUser_ActionType.FetchFail:
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
