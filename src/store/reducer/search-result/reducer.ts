import { ESearchResultActionType, ILectureFetchResult } from "../../../typings";
import { TActions as TSearchResultAction } from "../../action/search-result";

export interface ISearchResult {
  isGridView: boolean;
  isSearchSucceed: boolean;
  lectures: ILectureFetchResult[];
}

export interface IState {
  state: ISearchResult;
}

export const init: ISearchResult = {
  isGridView: true,
  isSearchSucceed: false,
  lectures: [],
};

const reducer = (
  state: ISearchResult = init,
  action: TSearchResultAction
): ISearchResult => {
  switch (action.type) {
    case ESearchResultActionType.Start_Search:
      return {
        ...state,
      };

    case ESearchResultActionType.Succeed_Search:
      return {
        ...state,
        isSearchSucceed: true,
        lectures: action.lectures,
      };

    case ESearchResultActionType.Fail_Search:
      return {
        ...state,
        isSearchSucceed: false,
      };

    case ESearchResultActionType.Toggle_ResultView:
      return {
        ...state,
        isGridView: !state.isGridView,
      };

    default:
      return state;
  }
};

export default reducer;
