import { ESearchActionType } from "../../../typings/type";
import { TActions as TSearchActions } from "../../action/search";

export interface ISearch {
  keywords: Array<string>;
}

export interface IState {
  state: ISearch;
}

const init: ISearch = {
  keywords: [],
};

const reducer = (state: ISearch = init, action: TSearchActions): ISearch => {
  switch (action.type) {
    case ESearchActionType.Set_Keyword:
      return {
        ...state,
        keywords: Array.from([...state.keywords, action.keyword]),
      };

    default:
      return state;
  }
};

export default reducer;
