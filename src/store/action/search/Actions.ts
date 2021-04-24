import { ESearchActionType } from "../../../typings/type";

export interface ISetSelectedKeyword {
  type: ESearchActionType.Set_SelectedKeyword;
  selectedKeyword: string;
}

export interface ISetSelectedPlatform {
  type: ESearchActionType.Set_SelectedPlatform;
  selectedPlatform: string;
}

export interface ISetSuggestion {
  type: ESearchActionType.Set_Suggestion;
  suggestions: Array<string>;
}

export interface IToggleSearchBar {
  type: ESearchActionType.Toggle_SearchBar;
}

export type TActions =
  | ISetSelectedKeyword
  | ISetSelectedPlatform
  | ISetSuggestion
  | IToggleSearchBar;
