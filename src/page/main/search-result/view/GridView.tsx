import React, { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import GridLectureCard from "~/src/component/lecture-card/GridLectureCard";

import { TCombinedStates } from "~/src/store";

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
        .map((_, i) => <GridLectureCard key={i} lectureIdx={i} />),
    [searchedLecturesLen]
  );

  return <ul className="gridView">{lectureCardsJSX}</ul>;
};

export default GridView;
