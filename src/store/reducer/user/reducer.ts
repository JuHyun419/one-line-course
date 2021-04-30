import { TActions as TUserActions } from "../../action/user";
import { IUserData, EUserActionType } from "~/src/typings";

export interface IUser {
  user: IUserData | null;
}

export interface IState {
  state: IUser;
}

const init: IUser = {
  user: null,
};

const reducer = (state: IUser = init, action: TUserActions): IUser => {
  switch (action.type) {
    case EUserActionType.Set_CurrentUser:
      return {
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
