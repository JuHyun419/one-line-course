import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import GridLectureCard from "~/src/component/lecture-card/GridLectureCard";
import Pagenator from "~/src/component/pagenator/Pagenator";

import { TCombinedStates } from "~/src/store";
import { ILectureFetchResult } from "~/src/typings";

import "./_GridView.scss";

export interface IGridViewProps {}

const GridView: React.FC<IGridViewProps> = () => {
  const searchedLecturesLen: number = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures.length,
    shallowEqual
  );

  // TODO: Pagenation
  const lectureCardsJSX = useMemo(
    () =>
      new Array(searchedLecturesLen)
        .fill(0)
        .map((_, i: number) => <GridLectureCard key={i} lectureIdx={i} />),
    [searchedLecturesLen]
  );

  return (
    <ul className="gridView">
      <Pagenator postsPerPage={9}>{lectureCardsJSX}</Pagenator>
    </ul>
  );
};

export default GridView;
