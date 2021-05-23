import React, { Fragment, useMemo } from "react";
import { useSelector } from "react-redux";

import { TCombinedStates } from "~/src/store";

import GridLectureCard from "~/src/component/lecture-card/GridLectureCard";
import Pagenator from "~/src/component/pagenator/Pagenator";

import "./_GridView.scss";
import LectureCardPopup from "~/src/component/lecture-card/LectureCardPopup";
import { ILectureData } from "~/src/typings";

export interface IGridViewProps {}

const GridView: React.FC<IGridViewProps> = () => {
  const searchedLecturesLen: number = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures.length
  );

  const lectures = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures
  );

  const lectureCardsJSX = useMemo(
    () =>
      lectures &&
      lectures.map((lec: ILectureData, i: number) => (
        <Fragment key={lec.id}>
          <GridLectureCard lecture={lec} popupIdx={i} />
          <LectureCardPopup lecture={lec} popupIdx={i} />
        </Fragment>
      )),
    [searchedLecturesLen]
  );

  return (
    <ul className="gridView">
      <Pagenator postsPerPage={9}>{lectureCardsJSX}</Pagenator>
    </ul>
  );
};

export default GridView;
