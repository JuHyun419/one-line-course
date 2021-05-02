import { ESearchBarActionType } from "../../../typings";
import {
  IToggleSearchBar,
  IOpenSearchBar,
  ICloseSearchBar,
  ISetCurrentInput,
  IToggleInvalidKeywordWarningRef,
} from "./Actions";

export const toggleSearchBar = (): IToggleSearchBar => ({
  type: ESearchBarActionType.Toggle_SearchBar,
});

export const openSearchBar = (): IOpenSearchBar => ({
  type: ESearchBarActionType.Open_SearchBar,
});

export const closeSearchBar = (): ICloseSearchBar => ({
  type: ESearchBarActionType.Close_SearchBar,
});

export const setCurrentInput = (input: string): ISetCurrentInput => ({
  type: ESearchBarActionType.Set_CurrentInput,
  input,
});

export const ToggleInvalidKeywordWarningRef = (): IToggleInvalidKeywordWarningRef => ({
  type: ESearchBarActionType.Toggle_InvalidKeyword_WarningRef,
});
