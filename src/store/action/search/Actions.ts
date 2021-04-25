import { ESearchActionType } from "../../../typings/type";

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

export interface IStartSearch {
  type: ESearchActionType.Start_Search;
}

export interface IToggleResultView {
  type: ESearchActionType.Toggle_ResultView
}

export type TActions =
  | ISetSelectedKeyword
  | ISetSelectedPlatform
  | IClearSelectedAll
  | IStartSearch
  | IToggleResultView;
