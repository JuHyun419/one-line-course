import { ESearchSuggestionActionType } from "../../../typings";
import { ISetSuggestion, IClearSuggestion } from "./Actions";

export const setSuggestion = (suggestions: Array<string>): ISetSuggestion => ({
  type: ESearchSuggestionActionType.Set_Suggestion,
  suggestions,
});

export const clearSuggestion = (): IClearSuggestion => ({
  type: ESearchSuggestionActionType.Clear_Suggestion,
});
