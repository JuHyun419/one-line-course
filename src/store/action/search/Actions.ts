import { ESearchActionType } from "../../../typings/type";

// export interface ISetAllKeywords {
//   type: ESearchActionType.Set_AllKeywords;
//   allKeywords: Set<string>;
// }

// export interface ISetAllPlatforms {
//   type: ESearchActionType.Set_AllPlatforms;
//   allPlatforms: Set<string>;
// }

export interface ISetSelectedKeyword {
  type: ESearchActionType.Set_SelectedKeyword;
  keyword: string;
}

export interface ISetSelectedPlatform {
  type: ESearchActionType.Set_SelectedPlatform;
  platform: string;
}

export interface ISetInputBuildAutoSuggestion {
  type: ESearchActionType.Set_Input_BuildAutoSuggestion;
  input: string | Array<string>;
}

export type TActions =
  // | ISetAllKeywords
  // | ISetAllPlatforms
  ISetSelectedKeyword | ISetSelectedPlatform | ISetInputBuildAutoSuggestion;
