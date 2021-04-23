import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  selectedKeywords: string[];
  selectedPlatforms: string[];
  suggestions: string[];
}

export interface IState {
  state: ISearch;
}

const init: ISearch = {
  selectedKeywords: [],
  selectedPlatforms: [],
  suggestions: [],
};

const reducer = (state: ISearch = init, action: TSearchActions): ISearch => {
  switch (action.type) {
    case ESearchActionType.Set_SelectedKeyword:
      return {
        ...state,
        selectedKeywords:
          state.selectedKeywords.indexOf(action.selectedKeyword) === -1 // if it doesn't match
            ? [...state.selectedKeywords, action.selectedKeyword]
            : state.selectedKeywords.filter(
                keyword => keyword !== action.selectedKeyword
              ),
      };

    case ESearchActionType.Set_SelectedPlatform:
      return {
        ...state,
        selectedPlatforms:
          state.selectedPlatforms.indexOf(action.selectedPlatform) === -1
            ? [...state.selectedPlatforms, action.selectedPlatform]
            : state.selectedPlatforms.filter(
                platform => platform !== action.selectedPlatform
              ),
      };

    case ESearchActionType.Set_Suggestion:
      return {
        ...state,
        suggestions: action.suggestions,
      };

    default:
      return state;
  }
};

export default reducer;
