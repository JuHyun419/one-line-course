import { TActions as TSearchAsyncActions } from "../../action/search-async";
import {
  ESearchAsyncActionType,
  ILectureData,
} from "../../../typings";

export interface ISearchAsync {
  lectures: Array<ILectureData>;
  err?: string;
  isLoading: boolean;
}

export interface IState {
  state: ISearchAsync;
}

const init: ISearchAsync = {
  lectures: [],
  err: "",
  isLoading: false,
};

const reducer = (
  state: ISearchAsync = init,
  action: TSearchAsyncActions
): ISearchAsync => {
  switch (action.type) {
    case ESearchAsyncActionType.FetchRequest_RetrieveLectures:
      return {
        ...state,
        isLoading: true,
      };

    case ESearchAsyncActionType.FetchSucceed_RetrieveLectures:
      return {
        lectures: action.lectures,
        err: "",
        isLoading: false,
      };

    case ESearchAsyncActionType.FetchFail_RetrieveLectures:
      return {
        ...state,
        err: action.err,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
