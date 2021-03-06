import { ESearchBarActionType } from "../../../typings";

export interface IToggleSearchBar {
  type: ESearchBarActionType.Toggle_SearchBar;
}

export interface IOpenSearchBar {
  type: ESearchBarActionType.Open_SearchBar;
}

export interface ICloseSearchBar {
  type: ESearchBarActionType.Close_SearchBar;
}

export interface ISetCurrentInput {
  type: ESearchBarActionType.Set_CurrentInput;
  input: string;
}

export interface IToggleInvalidKeywordWarningRef {
  type: ESearchBarActionType.Toggle_InvalidKeyword_WarningRef;  
}

export type TActions =
  | IToggleSearchBar
  | IOpenSearchBar
  | ICloseSearchBar
  | ISetCurrentInput
  | IToggleInvalidKeywordWarningRef;
