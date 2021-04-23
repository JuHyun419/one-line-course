import { ESearchActionType } from "../../../typings/type";
import { ISetSelectedKeyword, ISetSelectedPlatform } from "./Actions";

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
