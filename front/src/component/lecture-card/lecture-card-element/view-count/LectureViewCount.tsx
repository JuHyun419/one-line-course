import React from "react";
import { getIcon } from "~/src/common";

import "./_LectureViewCount.scss";

interface ILectureViewCountProps {
  viewCount: number;
}

const LectureViewCount: React.FC<ILectureViewCountProps> = ({ viewCount }) => (
  <>
    {getIcon("Users", undefined, { marginRight: "10px" })}
    {viewCount} 명
  </>
);

export default LectureViewCount;
