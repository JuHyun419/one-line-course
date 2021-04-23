import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  // allKeywords: Set<string>;
  // allPlatforms: Set<string>;
  selectedKeywords: Array<string>;
  selectedPlatforms: Array<string>;
  suggestion: string;
}

export interface IState {
  state: ISearch;
}

const init: ISearch = {
  // allKeywords: new Set<string>(),
  // allPlatforms: new Set<string>(),
  selectedKeywords: [],
  selectedPlatforms: [],
  suggestion: "",
};

const reducer = (state: ISearch = init, action: TSearchActions): ISearch => {
  switch (action.type) {
    // case ESearchActionType.Set_AllKeywords:
    //   return {
    //     ...state,
    //     allKeywords: action.allKeywords,
    //   };

    // case ESearchActionType.Set_AllPlatforms:
    //   return {
    //     ...state,
    //     allPlatforms: action.allPlatforms,
    //   };

    case ESearchActionType.Set_SelectedKeyword:
      return {
        ...state,
        selectedKeywords: Array.from([
          ...state.selectedKeywords,
          action.keyword,
        ]),
      };

    case ESearchActionType.Set_SelectedPlatform:
      return {
        ...state,
        selectedPlatforms: Array.from([
          ...state.selectedPlatforms,
          action.platform,
        ]),
      };

    case ESearchActionType.Set_Input_BuildAutoSuggestion:
      return {
        ...state,
        suggestion: "",
      };

    default:
      return state;
  }
};

export default reducer;
