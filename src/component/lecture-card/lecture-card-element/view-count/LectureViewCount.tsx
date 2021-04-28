import React from "react";
import { getIcon } from "~/src/common";

import "./_LectureViewCount.scss";

interface ILectureViewCountProps {
  viewCount: number;
}

const LectureViewCount: React.FC<ILectureViewCountProps> = ({ viewCount }) => {
  const viewCountIcon = getIcon("Users", undefined, { marginRight: "10px" });
  return (
    <div>
      {viewCountIcon}
      {viewCount} 명
    </div>
  );
};

export default LectureViewCount;
