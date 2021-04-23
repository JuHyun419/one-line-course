import {
  ESearchAsyncActionType,
  ILectureFetchResult,
} from "../../../typings/type";

export interface IFetchRequestAction_RetrieveLectures {
  type: ESearchAsyncActionType.FetchRequest_RetrieveLectures;
}

export interface IFetchSucceedAction_RetrieveLectures {
  type: ESearchAsyncActionType.FetchSucceed_RetrieveLectures;
  status: number;
  lectures: Array<ILectureFetchResult>;
}

export interface IFetchFailAction_RetrieveLectures {
  type: ESearchAsyncActionType.FetchFail_RetrieveLectures;
  errCode: string;
  err: string;
}

export type TActions =
  | IFetchRequestAction_RetrieveLectures
  | IFetchSucceedAction_RetrieveLectures
  | IFetchFailAction_RetrieveLectures;
