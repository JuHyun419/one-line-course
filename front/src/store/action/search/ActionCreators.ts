import { ESearchActionType } from "../../../typings/type";
import {
  ISetSelectedKeyword,
  ISetSelectedPlatform,
  ISetSuggestion,
} from "./Actions";

export const setSelectedKeyword = (
  selectedKeyword: string
): ISetSelectedKeyword => ({
  type: ESearchActionType.Set_SelectedKeyword,
  selectedKeyword,
});

export const setSelectedPlatform = (
  selectedPlatform: string
): ISetSelectedPlatform => ({
  type: ESearchActionType.Set_SelectedPlatform,
  selectedPlatform,
});

export const setSuggestion = (
  suggestions: Array<string>
): ISetSuggestion => ({
  type: ESearchActionType.Set_Suggestion,
  suggestions,
});
