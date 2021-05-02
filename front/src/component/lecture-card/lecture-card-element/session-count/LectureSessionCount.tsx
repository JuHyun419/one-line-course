import React, { useMemo } from "react";
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
  const actualSessionCount = useMemo(
    () => (sessionCount === 1 ? "단일 강좌" : `${sessionCount} 개`),
    [sessionCount]
  );
  
  return (
    <div>
      {sessionCountIcon}
      {actualSessionCount}
    </div>
  );
};

export default LectureSessionCount;
