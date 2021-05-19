import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ESearchResultActionType, ILectureData } from "../../../typings";
import {
  IStartSearch,
  ISucceedSearch,
  IFailSearch,
  IToggleResultView,
  IClearSearch,
} from "./Actions";

export const startSearch = (): IStartSearch => ({
  type: ESearchResultActionType.Start_Search,
});

export const succeedSearch = (lectures: ILectureData[]): ISucceedSearch => ({
  type: ESearchResultActionType.Succeed_Search,
  lectures,
});

export const failSearch = (): IFailSearch => ({
  type: ESearchResultActionType.Fail_Search,
});

export const clearSearch = (): IClearSearch => ({
  type: ESearchResultActionType.Clear_Search,
});

export const toggleResultView = (): IToggleResultView => ({
  type: ESearchResultActionType.Toggle_ResultView,
});

export const initSearch =
  (
    targetPlatforms: string[],
    targetKeywords: string[],
    lectures: ILectureData[]
  ) =>
  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    // start searching
    dispatch(startSearch());

    // query the fetched lecture by target platforms
    // e.g. ["youtube", "inflearn"] or ["유튜브", "인프런"]
    const lecturesQueriedByTargetPlatforms = lectures.filter(
      (lecture: ILectureData) => targetPlatforms.includes(lecture.platform)
    );
    console.log(lecturesQueriedByTargetPlatforms);

    // query the previous queried lectures by target keywords
    // e.g. ["react", "클론코딩", "c++"]
    // + 모든 lecture.skills 는 소문자
    // + lecture.skills 의 기본 구분자는 ','
    // + lecture.skills 의 각 skill 들은 '-', '/' 로 나뉠 수 있다.
    const lecturesQueriedByTargetKeywords =
      lecturesQueriedByTargetPlatforms.filter((lecture: ILectureData) => {
        const matchedWithTargetKeywords = lecture.skills
          .split(/,/)
          .filter((skill: string) => targetKeywords.includes(skill));
        return matchedWithTargetKeywords.length > 0;
      });
    console.log(lecturesQueriedByTargetKeywords);

    const isSearchSucceed = lecturesQueriedByTargetKeywords.length > 0;

    if (isSearchSucceed) {
      dispatch(succeedSearch(lecturesQueriedByTargetKeywords));
    } else {
      dispatch(failSearch());
    }
  };
