import { ESearchSuggestionActionType } from "../../../typings";

export interface ISetSuggestion {
  type: ESearchSuggestionActionType.Set_Suggestion;
  suggestions: Array<string>;
}

export interface IClearSuggestion {
  type: ESearchSuggestionActionType.Clear_Suggestion;
}

export type TActions =
  | ISetSuggestion
  | IClearSuggestion;
