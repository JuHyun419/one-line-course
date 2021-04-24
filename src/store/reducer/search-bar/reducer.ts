import { ESearchBarActionType } from "../../../typings/type";
import { TActions as TSearchBarActions } from "../../action/search-bar";

export interface ISearchBar {
  isSearchBarClose: boolean;
  input: string;
}

export interface IState {
  state: ISearchBar;
}

const init: ISearchBar = {
  isSearchBarClose: true,
  input: "",
};

const reducer = (
  state: ISearchBar = init,
  action: TSearchBarActions
): ISearchBar => {
  switch (action.type) {
    case ESearchBarActionType.Toggle_SearchBar:
      return {
        ...state,
        isSearchBarClose: !state.isSearchBarClose,
      };

    case ESearchBarActionType.Open_SearchBar:
      return {
        ...state,
        isSearchBarClose: false,
      };

    case ESearchBarActionType.Close_SearchBar:
      return {
        ...state,
        isSearchBarClose: true,
      };

    case ESearchBarActionType.Set_CurrentInput:
      return {
        ...state,
        input: action.input,
      };

    default:
      return state;
  }
};

export default reducer;
