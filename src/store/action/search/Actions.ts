import { ESearchActionType } from "../../../typings/type";

export interface ISetSelectedKeyword {
  type: ESearchActionType.Set_SelectedKeyword;
  keyword: string;
}

export interface ISetSelectedPlatform {
  type: ESearchActionType.Set_SelectedPlatform;
  platform: string;
}

export type TActions = ISetSelectedKeyword | ISetSelectedPlatform;
