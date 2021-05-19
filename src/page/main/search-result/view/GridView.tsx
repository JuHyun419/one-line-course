import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";

import GridLectureCard from "~/src/component/lecture-card/GridLectureCard";
import Pagenator from "~/src/component/pagenator/Pagenator";

import "./_GridView.scss";

export interface IGridViewProps {}

const GridView: React.FC<IGridViewProps> = () => {
  const searchedLecturesLen: number = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures.length,
    shallowEqual
  );

  const lectures = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures
  );

  const lectureCardsJSX = useMemo(
    () =>
      lectures &&
      lectures.map((_, i: number) => (
        <GridLectureCard key={i} lecture={lectures[i]} />
      )),
    [searchedLecturesLen, lectures]
  );

  return (
    <ul className="gridView">
      <Pagenator postsPerPage={9}>{lectureCardsJSX}</Pagenator>
    </ul>
  );
};

export default GridView;
