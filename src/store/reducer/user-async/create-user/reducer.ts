import { TActions as TUserAsyncActions } from "../../../action/user-async";
import { EUserAsync_CreateUser_ActionType, IUserData } from "~/src/typings";

export interface IUserAsync {
  err?: string;
  statusCode: number;
  isLoading: boolean;
}

export interface IState {
  state: IUserAsync;
}

const init: IUserAsync = {
  err: "",
  statusCode: 0,
  isLoading: false,
};

const reducer = (
  state: IUserAsync = init,
  action: TUserAsyncActions
): IUserAsync => {
  switch (action.type) {
    case EUserAsync_CreateUser_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case EUserAsync_CreateUser_ActionType.FetchSucceed:
      return {
        ...state,
        statusCode: action.statusCode,
        isLoading: false,
      };

    case EUserAsync_CreateUser_ActionType.FetchFail:
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
