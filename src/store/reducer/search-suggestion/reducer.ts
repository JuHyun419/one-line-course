import { ESearchSuggestionActionType } from "../../../typings/type";
import { TActions as TSearchSuggestionActions } from "../../action/search-suggestion";

export interface ISearchSuggestion {
  suggestions: string[];
}

export interface IState {
  state: ISearchSuggestion;
}

const init: ISearchSuggestion = {
  suggestions: [],
};

const reducer = (
  state: ISearchSuggestion = init,
  action: TSearchSuggestionActions
): ISearchSuggestion => {
  switch (action.type) {
    case ESearchSuggestionActionType.Set_Suggestion:
      return {
        ...state,
        suggestions: action.suggestions,
      };

    case ESearchSuggestionActionType.Clear_Suggestion:
      return {
        ...state,
        suggestions: [],
      };

    default:
      return state;
  }
};

export default reducer;
