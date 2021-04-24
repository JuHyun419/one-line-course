import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  selectedKeywords: string[];
  selectedPlatforms: string[];
}

export interface IState {
  state: ISearch;
}

const init: ISearch = {
  selectedKeywords: [],
  selectedPlatforms: [],
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

    default:
      return state;
  }
};

export default reducer;
