import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  selectedKeywords: Array<string>;
  selectedPlatforms: Array<string>;
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

    default:
      return state;
  }
};

export default reducer;
