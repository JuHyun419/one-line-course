import React from "react";

import "./_LectureDescription.scss";

interface ILectureDescriptionProps {
  description: string;
}

const LectureDescription: React.FC<ILectureDescriptionProps> = ({
  description,
}) => {
  return <div className="lectureCard--description">{description}</div>;
};

export default LectureDescription;
