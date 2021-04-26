import React from "react";

import "./_LectureViewCount.scss";

interface ILectureViewCountProps {
  viewCount: number;
}

const LectureViewCount: React.FC<ILectureViewCountProps> = ({ viewCount }) => {
  // TODO: icon
  return <div>{viewCount}</div>;
};

export default LectureViewCount;
