import { ESearchBarActionType } from "../../../typings/type";
import {
  IToggleSearchBar,
  IOpenSearchBar,
  ICloseSearchBar,
  ISetCurrentInput,
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
