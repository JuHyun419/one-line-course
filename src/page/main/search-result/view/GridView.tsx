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
