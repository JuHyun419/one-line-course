import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ESearchAsyncActionType, ILectureFetchResult } from "~/src/typings";
import {
  IFetchRequestAction_RetrieveLectures,
  IFetchSucceedAction_RetrieveLectures,
  IFetchFailAction_RetrieveLectures,
} from "./Actions";
import { get_AllLectures } from "~/src/service/LectureService";

export const fetchRequest_RetrieveLectures = (): IFetchRequestAction_RetrieveLectures => ({
  type: ESearchAsyncActionType.FetchRequest_RetrieveLectures,
});

export const fetchSucceed_RetrieveLectures = (
  status: number,
  lectures: Array<ILectureFetchResult>
): IFetchSucceedAction_RetrieveLectures => ({
  type: ESearchAsyncActionType.FetchSucceed_RetrieveLectures,
  status,
  lectures,
});

export const fetchFail_RetrieveLectures = (
  errCode: string,
  err: string
): IFetchFailAction_RetrieveLectures => ({
  type: ESearchAsyncActionType.FetchFail_RetrieveLectures,
  errCode,
  err,
});

export const initFetch_RetrieveLectures = () => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(fetchRequest_RetrieveLectures());
    const { data, status } = await get_AllLectures();

    // hasUppercase?
    // data.forEach((d: ILectureFetchResult, i: number) => {
    //   if (d.skills.match(/[A-Z]/) !== null) {
    //     console.log(`${i}: ${d.skills} has uppercase!`);
    //   }
    // });

    // console.log(data);

    dispatch(fetchSucceed_RetrieveLectures(status, data));
  } catch (err) {
    dispatch(fetchFail_RetrieveLectures(status, err));
  }
};
