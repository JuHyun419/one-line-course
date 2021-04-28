import {
  ESearchResultActionType,
  ILectureFetchResult,
} from "../../../typings";

export interface IStartSearch {
  type: ESearchResultActionType.Start_Search;
}

export interface ISucceedSearch {
  type: ESearchResultActionType.Succeed_Search;
  lectures: ILectureFetchResult[];
}

export interface IFailSearch {
  type: ESearchResultActionType.Fail_Search;
}

export interface IToggleResultView {
  type: ESearchResultActionType.Toggle_ResultView;
}

export type TActions =
  | IStartSearch
  | ISucceedSearch
  | IFailSearch
  | IToggleResultView;
