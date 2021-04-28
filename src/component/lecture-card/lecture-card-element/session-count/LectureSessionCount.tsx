import React from "react";
import { getIcon } from "~/src/common";

import "./_LectureSessionCount.scss";

interface ILectureSessionCountProps {
  sessionCount: number;
}

const LectureSessionCount: React.FC<ILectureSessionCountProps> = ({
  sessionCount,
}) => {
  const sessionCountIcon = getIcon("Lectures", undefined, {
    marginRight: "10px",
  });
  const actualSessionCount =
    sessionCount === 1 ? "단일 강좌" : `총 ${sessionCount} 강좌`;
  return (
    <div>
      {sessionCountIcon}
      {actualSessionCount}
    </div>
  );
};

export default LectureSessionCount;
