import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  selectedKeywords: string[];
  selectedPlatforms: string[];
  suggestions: string[];
  isSearchBarClose: boolean;
}

export interface IState {
  state: ISearch;
}

const init: ISearch = {
  selectedKeywords: [],
  selectedPlatforms: [],
  suggestions: [],
  isSearchBarClose: true,
};

const reducer = (state: ISearch = init, action: TSearchActions): ISearch => {
  switch (action.type) {
    case ESearchActionType.Set_SelectedKeyword:
      return {
        ...state,
        selectedKeywords:
          state.selectedKeywords.indexOf(action.selectedKeyword) !== -1 // if it doesn't match
            ? state.selectedKeywords.filter(
                keyword => keyword !== action.selectedKeyword
              )
            : [...state.selectedKeywords, action.selectedKeyword],
      };

    case ESearchActionType.Set_SelectedPlatform:
      return {
        ...state,
        selectedPlatforms:
          state.selectedPlatforms.indexOf(action.selectedPlatform) !== -1
            ? state.selectedPlatforms.filter(
                platform => platform !== action.selectedPlatform
              )
            : [...state.selectedPlatforms, action.selectedPlatform],
      };

    case ESearchActionType.Set_Suggestion:
      return {
        ...state,
        suggestions: action.suggestions,
      };

    case ESearchActionType.Toggle_SearchBar:
      return {
        ...state,
        isSearchBarClose: !state.isSearchBarClose,
      };

    default:
      return state;
  }
};

export default reducer;
