import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "~/src/store";
import { ILectureFetchResult } from "~/src/typings";

export interface IListViewProps {}

const ListView: React.FC<IListViewProps> = () => {
  const searchedLectures: ILectureFetchResult[] = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures
  );

  const searchedLecturesJSX = useMemo(
    () =>
      searchedLectures?.map((lec: ILectureFetchResult) => (
        <li key={uuid()}>
          {lec.title} {lec.skills[0]}
        </li>
      )),
    [searchedLectures]
  );
  return <div>{searchedLecturesJSX}</div>;
};

export default ListView;
