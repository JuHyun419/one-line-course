import { ESearchActionType } from "../../../typings/type";
import {
  ISetSelectedKeyword,
  ISetSelectedPlatform,
  IClearSelectedAll,
  IStartSearch,
  IToggleResultView,
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

export const clearSelectedAll = (): IClearSelectedAll => ({
  type: ESearchActionType.Clear_SelectedAll,
});

export const startSearch = (): IStartSearch => ({
  type: ESearchActionType.Start_Search,
});

export const toggleResultView = (): IToggleResultView => ({
  type: ESearchActionType.Toggle_ResultView,
});
