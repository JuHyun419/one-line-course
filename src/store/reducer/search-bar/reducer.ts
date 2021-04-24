import { ESearchBarActionType } from "../../../typings/type";
import { TActions as TSearchBarActions } from "../../action/search-bar";

export interface ISearchBar {
  isSearchBarClose: boolean;
}

export interface IState {
  state: ISearchBar;
}

const init: ISearchBar = {
  isSearchBarClose: true,
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

    default:
      return state;
  }
};

export default reducer;
