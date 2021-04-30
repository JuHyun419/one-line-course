import { EUserActionType, IUserData } from "~/src/typings";
import { ISetCurrentUser } from "./Actions";

export const setCurrentUser = (user: IUserData): ISetCurrentUser => ({
  type: EUserActionType.Set_CurrentUser,
  user,
});

