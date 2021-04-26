import React from "react";

import "./_LectureSessionCount.scss";

interface ILectureSessionCountProps {
  sessionCount: number;
}

const LectureSessionCount: React.FC<ILectureSessionCountProps> = ({
  sessionCount,
}) => {
  // TODO: Icon
  return <div>{sessionCount}</div>;
};

export default LectureSessionCount;
