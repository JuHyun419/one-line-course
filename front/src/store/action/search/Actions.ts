import { ESearchActionType } from "../../../typings";

export interface ISetSelectedKeyword {
  type: ESearchActionType.Set_SelectedKeyword;
  selectedKeyword: string;
}

export interface ISetSelectedPlatform {
  type: ESearchActionType.Set_SelectedPlatform;
  selectedPlatform: string;
}

export interface IClearSelectedAll {
  type: ESearchActionType.Clear_SelectedAll;
}

export type TActions =
  | ISetSelectedKeyword
  | ISetSelectedPlatform
  | IClearSelectedAll;
