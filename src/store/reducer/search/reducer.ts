import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  selectedKeywords: string[];
  selectedPlatforms: string[];
  isGridView: boolean;
}

export interface IState {
  state: ISearch;
}

const init: ISearch = {
  selectedKeywords: [],
  selectedPlatforms: [],
  isGridView: true,
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

    case ESearchActionType.Clear_SelectedAll:
      return {
        ...state,
        selectedKeywords: [],
        selectedPlatforms: [],
      };

    case ESearchActionType.Toggle_ResultView:
      return {
        ...state,
        isGridView: !state.isGridView,
      };

    case ESearchActionType.Start_Search: // fall thru
    default:
      return state;
  }
};

export default reducer;
