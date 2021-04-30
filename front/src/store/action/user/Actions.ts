import { EUserActionType, IUserData } from "~/src/typings";

export interface ISetCurrentUser {
  type: EUserActionType.Set_CurrentUser;
  user: IUserData;
}

export type TActions = ISetCurrentUser;
