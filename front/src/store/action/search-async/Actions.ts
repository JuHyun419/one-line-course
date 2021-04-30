import {
  ESearchAsyncActionType,
  ILectureData,
} from "../../../typings";

export interface IFetchRequestAction_RetrieveLectures {
  type: ESearchAsyncActionType.FetchRequest_RetrieveLectures;
}

export interface IFetchSucceedAction_RetrieveLectures {
  type: ESearchAsyncActionType.FetchSucceed_RetrieveLectures;
  status: number;
  lectures: Array<ILectureData>;
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
