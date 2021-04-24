import { ESearchBarActionType } from "../../../typings/type";
import { IToggleSearchBar, IOpenSearchBar, ICloseSearchBar } from "./Actions";

export const toggleSearchBar = (): IToggleSearchBar => ({
  type: ESearchBarActionType.Toggle_SearchBar,
});

export const openSearchBar = (): IOpenSearchBar => ({
  type: ESearchBarActionType.Open_SearchBar,
});

export const closeSearchBar = (): ICloseSearchBar => ({
  type: ESearchBarActionType.Close_SearchBar
});
