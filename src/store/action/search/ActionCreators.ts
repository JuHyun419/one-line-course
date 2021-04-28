import { ESearchActionType } from "../../../typings";
import {
  ISetSelectedKeyword,
  ISetSelectedPlatform,
  IClearSelectedAll,
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

