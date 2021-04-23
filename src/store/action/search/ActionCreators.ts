import { ESearchActionType } from "../../../typings/type";
import {
  ISetSelectedKeyword,
  ISetSelectedPlatform,
  ISetInputBuildAutoSuggestion,
} from "./Actions";

export const setSelectedKeyword = (keyword: string): ISetSelectedKeyword => ({
  type: ESearchActionType.Set_SelectedKeyword,
  keyword,
});

export const setSelectedPlatform = (
  platform: string
): ISetSelectedPlatform => ({
  type: ESearchActionType.Set_SelectedPlatform,
  platform,
});

export const setInputBuildAutoSuggestion = (
  input: string | Array<string>
): ISetInputBuildAutoSuggestion => ({
  type: ESearchActionType.Set_Input_BuildAutoSuggestion,
  input,
});
